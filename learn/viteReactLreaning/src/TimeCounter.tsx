import { useEffect, useState } from "react";

export default function TimeCounter() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);


  function handleStart() {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(interval);
  }
  function handleStop() {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  }
  return (
    <>
      <div>TimeCounter, {time}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
} //Debug multiple clicks