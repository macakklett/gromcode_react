import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const formattedTime = date => moment(date).format('h:mm:ss A');

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(getTimeWithOffset(offset));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTimeWithOffset(offset));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{formattedTime(time)}</div>
    </div>
  );
};

export default Clock;
