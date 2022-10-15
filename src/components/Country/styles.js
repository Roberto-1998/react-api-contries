import styled from 'styled-components';
import { dark_blue, very_light_gray } from '../../constants/colors';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 350px;
  width: 400px;

  background-color: ${(props) =>
    props.isDarkMode ? dark_blue : very_light_gray};

  @media (min-width: 768px) {
    width: 300px;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  div p:first-child {
    margin-top: 50px;
  }

  p {
    margin-top: 5px;
  }
`;
