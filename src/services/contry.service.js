import axios from 'axios';
import React from 'react';
import { URL } from '../constants/global';

export const getAllCountries = async () => {
  const { data } =
    await axios.get(`${URL}/all?fields=name,capital,flags,region,ccn3,population
  `);
  return data;
};

export const getOneCountry = async (code) => {
  const { data } = await axios.get(`${URL}/alpha?codes=${code}`);

  return data[0];
};
