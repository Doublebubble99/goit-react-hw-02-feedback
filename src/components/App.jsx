import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
const options = ['Good', 'Neutral', 'Bad'];
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleStatsChange = evt => {
    const target = evt.target;
    const name = target.innerText.toLowerCase();
    this.setState({
      [name]: this.state[name] + 1,
    });
    this.countTotalFeedback();
  };
  countTotalFeedback = () => {
    const { neutral, bad, good } = this.state;
    const totalPer = neutral + bad + good + 1;
    this.setState({
      total: totalPer,
    });
    this.countPositiveFeedbackPercentage(totalPer);
  };
  countPositiveFeedbackPercentage = total => {
    this.setState(prevState => ({
      percent: Math.round((prevState.good / total) * 100),
    }));
  };
  render() {
    const { good, neutral, bad, total, percent } = this.state;
    return (
      <Section
        title="Feedback"
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleStatsChange}
        />
        {(good || neutral || bad) === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percent}
          />
        )}
      </Section>
    );
  }
}
export default App;
