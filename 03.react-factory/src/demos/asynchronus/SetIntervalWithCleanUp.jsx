import React, { useState, useEffect } from "react";

const SetIntervalWithCleanUp = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return <div>{time.toLocalTimeString()}</div>;
};

export default SetIntervalWithCleanUp;
