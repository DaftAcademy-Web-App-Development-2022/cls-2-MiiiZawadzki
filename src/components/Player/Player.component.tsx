import React from 'react';
import usePlayer from "~/hooks/usePlayer.hook";
import trackData from "~/data/trackData.json";

import styles from "./Player.module.css";

import PlayButton from './components/PlayButton/PlayButton.component';
import PauseButton from './components/PauseButton/PauseButton.component';
import ProgressBar from './components/ProgressBar/ProgressBar.component';
import TimeDisplay from './components/TimeDisplay/TimeDisplay.component';
import VolumeButton from './components/VolumeButton/VolumeButton.component';

const Player = () => {
  const { state, actions } = usePlayer()
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {state.playing ? (
          <PauseButton
            pause={() => actions.pause()}
          />
        ) : (
          <PlayButton play={() => actions.play({
            id: trackData.id,
            name: trackData.name,
            src: trackData.preview_url,
            artists: trackData.artists.map(artist => artist.name)
          })} />
        )}
        <div className='w-full px-4'>
          <p>Staden</p>
          <ProgressBar
            progress={state.progress}
          />
          <p className='text-ui1'>Anders Linros</p>
        </div>
        <TimeDisplay
          currentTime={state.currentTime}
          duration={state.duration}
        />
        <div>
          <VolumeButton />
        </div>
      </div>
    </div>
  );
};

export default Player;
