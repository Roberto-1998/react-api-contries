import axios from 'axios';
import React from 'react';
import { URL } from '../constants/global';

export const getAllCountries = async () => {
  const { data } = await axios.get(`${URL}/all`);
  return data;
};
