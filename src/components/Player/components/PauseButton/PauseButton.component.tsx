import React from 'react';

import styles from "./PauseButton.module.css";

import {
  PauseIcon
} from "@heroicons/react/20/solid";

interface Props {
  pause: () => void;
}

const PauseButton = ({ pause }: Props) => (
  <div className={styles.root}>
    <div className={styles.iconBackground}>
      <button onClick={() => pause()}>
        <PauseIcon
          className={styles.icon}
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
);

export default PauseButton;
