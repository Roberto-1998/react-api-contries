import React from 'react';
import { Select } from './styles';

const SelectRegion = ({ region, selectOptions, setRegion }) => {
  return (
    <Select value={region} onChange={(e) => setRegion(e.target.value)}>
      {selectOptions.map((option) => (
        <option value={option.value} key={option.value}>
          {option.text}
        </option>
      ))}
    </Select>
  );
};

export default SelectRegion;
