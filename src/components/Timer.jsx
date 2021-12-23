import React from 'react';
import './Timer.scss';

const Timer = ({ time }) => (
  <p className="timer">
    {time.hours < 10 ? `0${time.hours}` : time.hours}
    :
    {time.minutes < 10 ? `0${time.minutes}` : time.minutes}
    :
    {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
  </p>
);

export default Timer;
