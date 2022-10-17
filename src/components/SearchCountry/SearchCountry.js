import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Input, SearchBox } from './styles';

const SearchCountry = ({ searchText, handleSearch, reference }) => {
  return (
    <SearchBox>
      <BsSearch />
      <Input
        data-cy='search'
        type='text'
        value={searchText}
        onChange={handleSearch}
        ref={reference}
        placeholder={'Search for a country...'}
      />
    </SearchBox>
  );
};

export default SearchCountry;
