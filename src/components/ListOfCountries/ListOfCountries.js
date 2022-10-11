import React from 'react';
import { List } from './styles';
import useGetCountries from '../../hooks/useGetCountries';
import Country from '../Country/Country';

const ListOfCountries = () => {
  const { data: countries, isError, isLoading } = useGetCountries();

  if (isError) return <h4>Ups..something went wrong</h4>;

  if (isLoading) return <h4>Loading...</h4>;

  return (
    <List>
      {countries.map((country) => (
        <Country key={country.id} {...country}></Country>
      ))}
    </List>
  );
};

export default ListOfCountries;
