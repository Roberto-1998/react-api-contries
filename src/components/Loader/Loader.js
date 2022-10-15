import React from 'react';
import { FadeLoader } from 'react-spinners';
import { override } from '../../constants/loaderCss';
import { useTheme } from '../../context/ThemeContext';
const Loader = () => {
  const { isDarkMode } = useTheme();
  return (
    <FadeLoader color={isDarkMode ? 'white' : 'black'} cssOverride={override} />
  );
};

export default Loader;
