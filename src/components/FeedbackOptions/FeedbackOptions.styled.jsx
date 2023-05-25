import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
export const Wrapper = styled.span`
  display: inline-flex;
  justify-content: space-evenly;
  padding-bottom: 15px;
  @media screen and (min-width: 768px) {
    padding-bottom: 18px;
  }
  @media screen and (min-width: 1200px) {
    padding-bottom: 21px;
  }
`;
export const Button = styled.button`
  width: 120px;
  height: 25px;
  border-radius: 12px;
  border: 1px solid red;
  background-color: brown;
  font-size: 15px;
  line-height: calc(22 / 15);
  cursor: pointer;
  color: white;
  :hover {
    transform: scale(1.1);
    border: 1px solid green;
    background-color: grey;
    color: black;
    box-shadow: 0 0 12px 1px yellow;
  }
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 35px;
    font-size: 18px;
    line-height: calc(22 / 18);
  }
  @media screen and (min-width: 1200px) {
    width: 200px;
    height: 50px;
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`;
