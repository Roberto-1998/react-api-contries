import styled from 'styled-components';

export const SearchBox = styled.div`
  position: relative;
  width: 300px;

  @media (min-width: 900px) {
    width: 500px;
  }

  svg {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 15px;
    font-size: 20px;
    transform: translateY(-50%);
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  padding: 15px 15px 15px 45px;

  border-radius: 6px;
`;
