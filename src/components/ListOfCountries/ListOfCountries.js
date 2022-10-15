import React, { useMemo, useRef, useState } from 'react';
import { List } from './styles';
import useGetCountries from '../../hooks/useGetCountries';

import { selectOptions } from '../../constants/selectOptions';
import { Country } from '../Country';
import { SearchCountry } from '../SearchCountry';
import { SelectRegion } from '../SelectRegion';

const ListOfCountries = () => {
  const ref = useRef(null);
  const [searchText, setSearchText] = useState('');
  const { data: countries = [], isError, isLoading } = useGetCountries();
  const [region, setRegion] = useState('All');

  const handleSearch = () => {
    setSearchText(ref.current.value);
  };

  const filteredCountries = useMemo(() => {
    if (region !== 'All') {
      if (searchText !== '') {
        return countries
          .filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(searchText.toLowerCase()),
          )
          .filter((country) => country.region === region);
      }
      return countries.filter((country) => country.region === region);
    }

    if (region === 'All') {
      if (searchText !== '') {
        return countries.filter((country) =>
          country.name.common.toLowerCase().includes(searchText.toLowerCase()),
        );
      }
      return countries;
    }
  }, [searchText, region, countries]);

  if (isError) return <h4>Ups..something went wrong</h4>;

  if (isLoading) return <h4>Loading...</h4>;

  return (
    <>
      <div className='flex justify-between flex-wrap mt-12'>
        <SearchCountry
          searchText={searchText}
          handleSearch={handleSearch}
          reference={ref}
        />

        <SelectRegion
          region={region}
          selectOptions={selectOptions}
          setRegion={setRegion}
        />
      </div>

      <List className='mt-12'>
        {filteredCountries.map((country) => (
          <Country key={country.id} {...country}></Country>
        ))}
      </List>
    </>
  );
};

export default ListOfCountries;
