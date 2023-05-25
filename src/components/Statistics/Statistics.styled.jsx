import styled from '@emotion/styled';
export const Container = styled.div`
  background-color: gray;
  border: 1px solid lightgreen;
  :hover {
    transform: scale(1.1);
    box-shadow: 0 0 12px 0 orange;
    background-color: lightblue;
  }
`;
export const Title = styled.h2`
  font-family: 'Oxygen', sans-serif;
  font-size: 20px;
  line-height: calc(25 / 20);
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }

  @media screen and (min-width: 1200px) {
    font-size: 28px;
    line-height: calc(32 / 28);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    padding-bottom: 15px;
    padding-left: 20px;
  }
  @media screen and (min-width: 1200px) {
    padding-bottom: 20px;
    padding-left: 25px;
  }
`;
export const Stat = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: calc(22 / 18);
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(24 / 20);
  }
  @media screen and (min-width: 1200px) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`;
