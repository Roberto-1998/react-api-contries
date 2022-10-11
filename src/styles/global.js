import { createGlobalStyle } from 'styled-components';
import {
  very_dark_blue_background,
  white,
  very_dark_blue_text,
  very_light_gray,
  dark_blue,
} from '../constants/colors';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

body{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Nunito Sans', sans-serif; font-size:16px ;
    background-color:${(props) =>
      props.isDarkMode ? very_light_gray : very_dark_blue_background} ;
  }
   

h1, h4, p, button, ul, li{
    color:${(props) => (props.isDarkMode ? white : very_dark_blue_text)};
    
}

div,nav, input{
  background-color:${(props) => (props.isDarkMode ? dark_blue : white)}
}


button{
    background-color:transparent ;
    border:none ;
}

`;
