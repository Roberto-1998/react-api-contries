import { useQuery } from 'react-query';
import { COUNTRIES_LIST_KEY } from '../constants/queries';
import { getAllCountries } from '../services/contry.service';

const useGetCountries = () => {
  const { data, isError, isLoading } = useQuery(
    [COUNTRIES_LIST_KEY],
    getAllCountries,
  );

  return { data, isError, isLoading };
};

export default useGetCountries;
