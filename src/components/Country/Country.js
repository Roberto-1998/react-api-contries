import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Card } from './styles';

const Country = ({ name, capital = [], region, population, flags, ccn3 }) => {
  const { common } = name;
  const { png, svg } = flags;
  const { isDarkMode } = useTheme();

  const [mainCapital] = capital;

  return (
    <NavLink to={`/home/${ccn3}`}>
      <Card isDarkMode={isDarkMode}>
        {/*   <img src={!svg ? svg : png} /> */}
        <div className='p-5'>
          <h4 className='font-bold'>{common}</h4>
          <p style={{ marginTop: '12px' }}>
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
    </NavLink>
  );
};

export default Country;
