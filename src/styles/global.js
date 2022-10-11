import { createGlobalStyle } from 'styled-components';
import { very_dark_blue_background, white } from '../constants/colors';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

body{
    padding:0;
    margin:0;
    box-sizing:border-box;
    background-color:${very_dark_blue_background} ;
    font-family: 'Nunito Sans', sans-serif; font-size:16px ;}
   

    h1, h4, p, button, ul, li{
    color:${white};
}


button{
    background-color:transparent ;
    border:none ;
}

`;
