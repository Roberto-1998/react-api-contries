import { useQuery } from 'react-query';
import { COUNTRY_DETAIL } from '../constants/queries';
import { getOneCountry } from '../services/contry.service';

const useGetOneCountry = (code) => {
  const { data, isError, isLoading } = useQuery(
    [COUNTRY_DETAIL, code],
    async () => await getOneCountry(code),
    {
      enabled: !!code,
    },
  );

  console.log(
    '🚀 ~ file: useGetOneCountry.js ~ line 7 ~ useGetOneCountry ~ data',
    data,
  );

  return { data, isError, isLoading };
};

export default useGetOneCountry;
