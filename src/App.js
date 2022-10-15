import React, { Suspense, lazy } from 'react';
import { Box } from './App.styles';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

import { Loader } from './components/Loader';
import { useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';

const Home = lazy(() => import('./pages/Home/Home'));
const CountryDetail = lazy(() => import('./pages/CountryDetail/CountryDetail'));

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};

export default App;
