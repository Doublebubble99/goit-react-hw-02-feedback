import styled from '@emotion/styled';
export const Container = styled.section``;
export const Title = styled.h1`
  text-align: center;
  font-family: 'Cantarell', sans-serif;
  font-size: 25px;
  line-height: calc(28 / 25);
  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: calc(32 / 28);
  }
  @media screen and (min-width: 1200px) {
    font-size: 32px;
    line-height: calc(36 / 32);
  }
`;
