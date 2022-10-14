import React, { useMemo, useRef, useState } from 'react';
import { List } from './styles';
import useGetCountries from '../../hooks/useGetCountries';
import Country from '../Country/Country';

const ListOfCountries = () => {
  const ref = useRef(null);
  const [searchText, setSearchText] = useState('');
  const { data: countries = [], isError, isLoading } = useGetCountries();

  const handleSearch = () => {
    setSearchText(ref.current.value);
  };

  const filteredCountries = useMemo(
    () =>
      countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(searchText.toLowerCase());
      }),
    [searchText],
  );

  const initialCountriesList = useMemo(
    () => (filteredCountries.length > 0 ? filteredCountries : countries),
    [filteredCountries, countries],
  );

  if (isError) return <h4>Ups..something went wrong</h4>;

  if (isLoading) return <h4>Loading...</h4>;

  return (
    <>
      <input type='text' value={searchText} onChange={handleSearch} ref={ref} />
      <List>
        {initialCountriesList.map((country) => (
          <Country key={country.id} {...country}></Country>
        ))}
      </List>
    </>
  );
};

export default ListOfCountries;
