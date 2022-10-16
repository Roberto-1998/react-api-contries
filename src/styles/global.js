import { createGlobalStyle } from 'styled-components';
import {
  very_dark_blue_background,
  white,
  very_light_gray,
  very_dark_blue_text,
  dark_blue,
} from '../constants/colors';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;



body{
    padding:0;
    margin:0;
    width:100%;
    height:100% ;
    box-sizing:border-box;
    font-family: 'Nunito Sans', sans-serif; font-size:16px ;
    background-color:${(props) =>
      props.isDarkMode ? very_dark_blue_background : very_light_gray} ;
   
  }

  p{
    font-size:14px ;
  }
   

h1, h4, p, button, ul, li, svg, input, select{
    color:${(props) => (props.isDarkMode ? white : very_dark_blue_text)};
    
}

nav, input, button, select{
  background-color:${(props) => (props.isDarkMode ? dark_blue : white)};
};





`;
