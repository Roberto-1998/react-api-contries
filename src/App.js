import React from 'react';

import Navbar from './components/Navbar';
import ThemeProvider from './context/ThemeContext';

import { GlobalStyle } from './styles/global';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
