import React, { useRef, useState } from 'react';
import { List } from './styles';
import useGetCountries from '../../hooks/useGetCountries';

import { selectOptions } from '../../constants/selectOptions';
import { Country } from '../Country';
import { SearchCountry } from '../SearchCountry';
import { SelectRegion } from '../SelectRegion';
import { Loader } from '../Loader';
import useGetFilteredCountries from '../../hooks/useGetFilteredCountries';

const ListOfCountries = () => {
  const ref = useRef(null);
  const [searchText, setSearchText] = useState('');
  const [region, setRegion] = useState('All');
  const { data: countries = [], isError, isLoading } = useGetCountries();
  const { filteredCountries } = useGetFilteredCountries(
    region,
    searchText,
    countries,
  );

  if (isError) return <h4>Ups..something went wrong</h4>;

  if (isLoading) return <Loader />;

  return (
    <>
      <div className='flex justify-center md:justify-between flex-wrap mt-12 gap-9'>
        <SearchCountry
          searchText={searchText}
          handleSearch={() => setSearchText(ref.current.value)}
          reference={ref}
        />

        <SelectRegion
          region={region}
          selectOptions={selectOptions}
          setRegion={setRegion}
        />
      </div>

      <List className='mt-12 justify-center md:justify-between'>
        {filteredCountries.map((country) => (
          <Country key={country.id} {...country}></Country>
        ))}
      </List>
    </>
  );
};

export default ListOfCountries;
