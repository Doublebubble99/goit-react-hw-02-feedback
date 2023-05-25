import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Wrapper, Button } from './FeedbackOptions.styled';
function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Container>
      <Title>Please leave feedback</Title>
      <Wrapper>
        {options.map(button => (
          <Button onClick={onLeaveFeedback} type="button" key={button}>
            {button}
          </Button>
        ))}
      </Wrapper>
    </Container>
  );
}
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
