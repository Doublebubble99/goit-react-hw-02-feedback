import styled from '@emotion/styled';
export const Note = styled.h2`
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  color: red;
  font-size: 25px;
  text-shadow: 2px 2px 6px black;
  line-height: calc(30 / 25);
  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: calc(35 / 30);
  }
  @media screen and (min-width: 1200px) {
    font-size: 35px;
    line-height: calc(39 / 35);
  }
`;
