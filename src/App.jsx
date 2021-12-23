import React, { useState } from 'react';
import './App.scss';
import Timer from './components/Timer';

export const App = () => {
  const initialTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [time, setTime] = useState(initialTime);

  const [interval, setNewInterval] = useState();

  const [isCounting, setCountingStatus] = useState(false);

  let settedHours = time.hours;
  let settedMinutes = time.minutes;
  let settedSeconds = time.seconds;

  const startCount = () => {
    if (settedMinutes === 60) {
      settedHours += 1;
      settedMinutes = 0;
    }

    if (settedSeconds === 60) {
      settedMinutes += 1;
      settedSeconds = 0;
    }

    setTime({
      hours: settedHours,
      minutes: settedMinutes,
      seconds: settedSeconds,
    });

    settedSeconds += 1;
  };

  const startTimer = () => {
    startCount();
    setCountingStatus(true);
    setNewInterval(setInterval(startCount, 1000));
  };

  const waitTimer = () => {
    clearInterval(interval);
    setCountingStatus(false);
  };

  const stopTimer = () => {
    waitTimer();

    setTime({ ...initialTime });
  };

  const resetTimer = () => {
    stopTimer();

    settedHours = 0;
    settedMinutes = 0;
    settedSeconds = 0;

    startTimer();
  };

  return (
    <div className="App">
      <h1>
        React timer
      </h1>

      <div className="App__timer">
        <Timer time={time} />

        {!isCounting ? (
          <button
            type="button"
            onClick={startTimer}
            className="App__button"
          >
            Start
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={stopTimer}
              className="App__button"
            >
              Stop
            </button>

            <button
              type="button"
              onClick={resetTimer}
              className="App__button"
            >
              Reset
            </button>

            <button
              type="button"
              onDoubleClick={waitTimer}
              className="App__button"
            >
              Wait
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
