import { useMemo } from 'react';

const useGetFilteredCountries = (region, searchText, countries) => {
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

  return { filteredCountries };
};

export default useGetFilteredCountries;
