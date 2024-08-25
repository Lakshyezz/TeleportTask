// src/DateTime.js
import React, { useState, useEffect } from 'react';

function DateTime() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Current Date: {currentDate.toLocaleDateString()}</p>
      <p>Current Time: {currentDate.toLocaleTimeString()}</p>
    </div>
  );
}

export default DateTime;
