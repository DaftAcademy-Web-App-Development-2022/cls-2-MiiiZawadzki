import React from 'react';

import styles from "./PlayButton.module.css";

import {
  PlayIcon
} from "@heroicons/react/20/solid";

interface Props {
  play: () => void;
}

const PlayButton = ({ play }: Props) => (
  <div className={styles.root}>
    <div className={styles.iconBackground}>
      <button onClick={() => play()}>
        <PlayIcon
          className={styles.icon}
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
);

export default PlayButton;
