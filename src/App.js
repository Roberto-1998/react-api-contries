import React from 'react';
import { Box } from './App.styles';

import Navbar from './components/Navbar/Navbar';

import { GlobalStyle } from './styles/global';
import { useTheme } from './context/ThemeContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import CountryDetail from './pages/CountryDetail/CountryDetail';
import Home from './pages/Home/Home';

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Navbar />

      <Box>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/home/:id' element={<CountryDetail />} />
          <Route path='*' element={<Navigate to={'/home'} />} />
          <Route path='' element={<Navigate to={'/home'} />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
