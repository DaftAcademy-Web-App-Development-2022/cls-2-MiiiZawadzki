import React from 'react';

import styles from "./TimeDisplay.module.css";

interface Props {
  currentTime: number;
  duration: number;
}

const TimeDisplay = ({ currentTime, duration }: Props) => {
  const formattedCurrentTime = secondsToTime(currentTime);
  const formattedDuration = secondsToTime(duration);

  return (
    <div className={styles.timer}>
      <p>{formattedCurrentTime} / {formattedDuration}</p>
    </div>
  );
};

function secondsToTime(e: number) {
  const m = Math.floor(e % 3600 / 60).toString().padStart(2, '0'),
    s = Math.floor(e % 60).toString().padStart(2, '0');

  return m + ':' + s;
}


export default TimeDisplay;
