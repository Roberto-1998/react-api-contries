import styled from 'styled-components';

export const MainBox = styled.div``;

export const Button = styled.button`
  display: flex;
  padding: 5px 30px;
  justify-content: center;
  gap: 10px;
  align-items: center;
  border-radius: 3px;

  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    pointer-events: none;
    border: solid gray 1px;
    filter: blur(2px);
  }
`;

export const ImageBox = styled.div`
  width: 400px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const InfoBox = styled.div`
  p {
    margin-top: 10px;
  }
`;
