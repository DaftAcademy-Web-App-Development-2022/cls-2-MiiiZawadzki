import React from 'react';

import styles from "./VolumeButton.module.css";

import {
  SpeakerWaveIcon
} from "@heroicons/react/20/solid";

interface Props { }

const VolumeButton = ({ }: Props) => (
  <div className={styles.root}>
    <div className={styles.iconBackground}>
      <button onClick={() => console.log('Volume action')}>
        <SpeakerWaveIcon
          className={styles.icon}
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
);

export default VolumeButton;
