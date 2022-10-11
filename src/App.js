import React, { useState } from 'react';
import ListOfCountries from './components/ListOfCountries/ListOfCountries';
import { Box } from './App.styles';

import Navbar from './components/Navbar/Navbar';

import { GlobalStyle } from './styles/global';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Navbar />

      <Box>
        <ListOfCountries />
      </Box>
    </>
  );
};

export default App;
