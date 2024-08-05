import { useState } from 'react';

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  const { text, value } = props;
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const yhteensa = good + neutral + bad;
  const keskiarvo = yhteensa > 0 ? (good - bad) / yhteensa : 0;
  const positive = (good / yhteensa) * 100;
  if (yhteensa === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="GOOD" value={good} />
        <StatisticLine text="NEUTRAL" value={neutral} />
        <StatisticLine text="BAD" value={bad} />
        <StatisticLine text="ALL" value={yhteensa} />
        <StatisticLine text="AVG" value={keskiarvo} />
        <StatisticLine text="POSITIVE%" value={positive} />
      </tbody>
    </table>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={increaseGood} text="GOOD" />
      <Button handleClick={increaseNeutral} text="NEUTRAL" />{' '}
      <Button handleClick={increaseBad} text="BAD" />
      <h2>Statistics </h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
