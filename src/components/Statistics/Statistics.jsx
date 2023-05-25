import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Wrapper, Stat } from './Statistics.styled';
function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Container>
      <Title>Statistics</Title>
      <Wrapper>
        <Stat>Good: {good}</Stat>
        <Stat>Neutral: {neutral}</Stat>
        <Stat>Bad: {bad}</Stat>
        <Stat>Total: {total || 0}</Stat>
        <Stat>Positive feedback: {positivePercentage || 0}%</Stat>
      </Wrapper>
    </Container>
  );
}
export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
