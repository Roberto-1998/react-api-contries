import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useGetOneCountry from '../../hooks/useGetOneCountry';
import {
  arrayOfCurrencies,
  arrayOfLanguages,
} from '../../utils/arrayFromObjects';
import { BsArrowLeft } from 'react-icons/bs';
import { Button, Image, ImageBox, InfoBox } from './styles';

import { Loader } from '../../components/Loader';

const CountryDetail = () => {
  const { id } = useParams();
  const { data: country, isError, isLoading } = useGetOneCountry(id);

  if (isError) return <p>Ups...something went wrong</p>;

  if (isLoading) return <Loader />;

  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    flags,
    currencies,
    languages,
  } = country;

  const { svg, png } = flags;

  return (
    <div className='mt-12'>
      <Link to={'/home'}>
        <Button>
          <BsArrowLeft /> Back
        </Button>
      </Link>

      <div className='flex flex-wrap justify-start md:justify-center mt-12'>
        <ImageBox>
          <Image src={!svg ? svg : png} />
        </ImageBox>

        <div className='w-3/5 ml-28 mt-20'>
          <h1 className='text-2xl font-bold'>{name.common}</h1>
          <div className='flex flex-row flex-wrap gap-10 md:gap-20'>
            <InfoBox>
              <p>
                <strong>Native Name:</strong>
                {name.official}
              </p>
              <p>
                <strong>Population:</strong>
                {population}
              </p>
              <p>
                <strong>Region:</strong>
                {region}
              </p>
              <p>
                <strong>Subregion:</strong>
                {subregion}
              </p>
              <p>
                <strong>Capital:</strong>
                {capital[0]}
              </p>
            </InfoBox>

            <InfoBox>
              <p>
                <strong>Top Level Domain:</strong>
                {tld.map((t) => (
                  <span key={tld}>{tld}</span>
                ))}
              </p>
              <p>
                <strong>Currencies:</strong>
                {arrayOfCurrencies(currencies).map((cur) => (
                  <span key={cur}>{cur}</span>
                ))}
              </p>
              <p>
                <strong>Languages:</strong>
                {arrayOfLanguages(languages).map((lng) => (
                  <span key={lng}>{lng}</span>
                ))}{' '}
              </p>
            </InfoBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
