import styled from 'styled-components';

import {
  dark_blue,
  very_light_gray,
  white,
  very_dark_blue_text,
} from '../constants/colors';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background-color: ${(props) =>
    props.isDarkMode ? dark_blue : very_light_gray};

  h4,
  button {
    color: ${(props) => (props.isDarkMode ? white : very_dark_blue_text)};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 300;
`;
