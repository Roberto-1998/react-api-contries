import React from 'react';
import { Nav, Button } from './styles';
import { FaMoon, FaRegMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { handleTheme, isDarkMode } = useTheme();
  console.log(
    '🚀 ~ file: Navbar.js ~ line 8 ~ Navbar ~ isDarkMode',
    isDarkMode,
  );

  return (
    <Nav isDarkMode={isDarkMode}>
      <h4>Where in the world?</h4>
      <Button onClick={handleTheme}>
        {' '}
        {isDarkMode ? <FaMoon /> : <FaRegMoon />} Dark Mode
      </Button>
    </Nav>
  );
};

export default Navbar;
