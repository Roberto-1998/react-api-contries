import React from 'react';
import { Card } from './styles';

const Country = ({ name, capital = [], region, population, flags }) => {
  const { common } = name;
  const { png, svg } = flags;

  const [mainCapital] = capital;

  return (
    <Card>
      {/*   <img src={!svg ? svg : png} /> */}
      <div>
        <h4>{common}</h4>
        <p>
          <strong>Population: </strong> {population}
        </p>
        <p>
          <strong>Region: </strong> {region}
        </p>
        <p>
          <strong>Capital: </strong> {mainCapital}
        </p>
      </div>
    </Card>
  );
};

export default Country;
