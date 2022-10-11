import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ handleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { handleTheme, isDarkMode } = useContext(ThemeContext);

  return {
    handleTheme,
    isDarkMode,
  };
};

export default ThemeProvider;
