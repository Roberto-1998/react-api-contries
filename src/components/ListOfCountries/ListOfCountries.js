import React, { useMemo, useRef, useState } from 'react';
import { List, Input, Select } from './styles';
import useGetCountries from '../../hooks/useGetCountries';
import Country from '../Country/Country';

const selectOptions = [
  { text: 'Filter by Region', value: 'All' },
  { text: 'America', value: 'Americas' },
  { text: 'Africa', value: 'Africa' },
  { text: 'Asia', value: 'Asia' },
  { text: 'Oceania', value: 'Oceania' },
  { text: 'Europe', value: 'Europe' },
];

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
      <div className='flex justify-between mt-12'>
        <Input
          type='text'
          value={searchText}
          onChange={handleSearch}
          ref={ref}
          placeholder={'Search for a country...'}
        />

        <Select value={region} onChange={(e) => setRegion(e.target.value)}>
          {selectOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          ))}
        </Select>
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
