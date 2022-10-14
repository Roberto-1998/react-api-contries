import React, { useMemo, useRef, useState } from 'react';
import { List } from './styles';
import useGetCountries from '../../hooks/useGetCountries';
import Country from '../Country/Country';

const ListOfCountries = () => {
  const ref = useRef(null);
  const [searchText, setSearchText] = useState('');
  const { data: countries = [], isError, isLoading } = useGetCountries();
  const [region, setRegion] = useState('All');
  console.log(
    '🚀 ~ file: ListOfCountries.js ~ line 11 ~ ListOfCountries ~ region',
    region,
  );

  const handleSearch = () => {
    setSearchText(ref.current.value);
  };

  const filteredCountries = useMemo(() => {
    /*  switch (region) {
      case region !== 'All':
        switch (searchText) {
          case searchText !== '':
            return countries
              .filter((country) =>
                country.name.common
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
              )
              .filter((country) => country.region === region);

          case searchText === '':
            return countries.filter((country) => country.region === region);
        }
        break;

      case region === 'All':
        switch (searchText) {
          case searchText !== '':
            return countries.filter((country) =>
              country.name.common
                .toLowerCase()
                .includes(searchText.toLowerCase()),
            );

          case searchText === '':
            return countries;
        }
        break;
    } */

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
      <input type='text' value={searchText} onChange={handleSearch} ref={ref} />

      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value='All'>All</option>
        <option value='Americas'>Americas</option>
        <option value='Africa'>Africa</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europa</option>
      </select>
      <List>
        {filteredCountries.map((country) => (
          <Country key={country.id} {...country}></Country>
        ))}
      </List>
    </>
  );
};

export default ListOfCountries;
