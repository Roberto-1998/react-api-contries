import React from 'react';
import { Select } from './styles';

const SelectRegion = ({ region, selectOptions, setRegion }) => {
  return (
    <Select
      title='region'
      value={region}
      onChange={(e) => setRegion(e.target.value)}
      aria-label='Search'
    >
      {selectOptions.map((option) => (
        <option value={option.value} key={option.value}>
          {option.text}
        </option>
      ))}
    </Select>
  );
};

export default SelectRegion;
