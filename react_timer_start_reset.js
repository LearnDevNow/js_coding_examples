import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (timerRunning) {
      intervalId = setInterval(() => {
        if (count < 5) {
          setCount(prevCount => prevCount + 1);
        } else {
          clearInterval(intervalId);
          setTimerRunning(false);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerRunning, count]);

  const startTimer = () => {
    setCount(0);
    setTimerRunning(true);
  };

  // if stop required
  // const stopTimer = () => {
  //   setTimerRunning(false);
  // };

  const clearTimer = () => {
    setCount(0);
    setTimerRunning(false);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={clearTimer}>Clear Timer</button>
    </div>
  );
}

export default Timer;
