'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { IoMdPlay, IoMdPause } from 'react-icons/io';
import PropTypes from 'prop-types';
import styles from './scenario-audio-button.module.css';

const ScenarioAudioButton = ({ scenario }) => {
  const audioRef = useRef(null);
  const savedTimeRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const storageKey = `scenario-audio-time:${scenario}`;

  const saveCurrentTime = (timeInSeconds) => {
    try {
      window.localStorage.setItem(storageKey, String(timeInSeconds));
    } catch (error) {
      // Ignore storage errors (e.g. private mode restrictions).
    }
  };

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    let persistedTime = 0;
    try {
      persistedTime = Number(window.localStorage.getItem(storageKey) || 0);
    } catch (error) {
      persistedTime = 0;
    }

    if (!Number.isFinite(persistedTime) || persistedTime < 0) {
      persistedTime = 0;
    }

    savedTimeRef.current = persistedTime;

    setIsPlaying(false);
    setCurrentTime(persistedTime);
    setDuration(0);
    audioRef.current.load();
  }, [scenario, storageKey]);

  const formatTime = useMemo(
    () => (timeInSeconds) => {
      if (!Number.isFinite(timeInSeconds)) {
        return '00:00';
      }

      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);

      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    },
    [],
  );

  const handleToggleAudio = async () => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      audioRef.current.currentTime = savedTimeRef.current;
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Unable to play audio:', error);
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) {
      return;
    }

    const nextTime = audioRef.current.currentTime;
    savedTimeRef.current = nextTime;
    setCurrentTime(nextTime);
    saveCurrentTime(nextTime);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) {
      return;
    }

    const nextDuration = audioRef.current.duration || 0;
    const restoredTime = Math.min(savedTimeRef.current, nextDuration || 0);

    setDuration(nextDuration);
    audioRef.current.currentTime = restoredTime;
    setCurrentTime(restoredTime);
  };

  const handleSeek = (event) => {
    if (!audioRef.current) {
      return;
    }

    const nextTime = Number(event.target.value);
    if (!Number.isFinite(nextTime)) {
      return;
    }

    audioRef.current.currentTime = nextTime;
    savedTimeRef.current = nextTime;
    setCurrentTime(nextTime);
    saveCurrentTime(nextTime);
  };

  const handlePause = () => {
    if (!audioRef.current) {
      return;
    }

    const pausedTime = audioRef.current.currentTime;
    savedTimeRef.current = pausedTime;
    setCurrentTime(pausedTime);
    setIsPlaying(false);
    saveCurrentTime(pausedTime);
  };

  const handleEnded = () => {
    savedTimeRef.current = 0;
    setCurrentTime(0);
    setIsPlaying(false);
    saveCurrentTime(0);
  };

  return (
    <div className={styles.AudioPlayer}>
      {scenario && (
        <>
          <audio
            ref={audioRef}
            src={`/scenarios/${scenario}.wav`}
            preload="metadata"
            onPause={handlePause}
            onEnded={handleEnded}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
          <button
            type="button"
            onClick={handleToggleAudio}
            className={styles.PlayButton}
          >
            {isPlaying ? <IoMdPause /> : <IoMdPlay />}
          </button>

          <div className={styles.ProgressWrapper}>
            <input
              type="range"
              min="0"
              max={duration > 0 ? duration : 1}
              step="0.1"
              value={Math.min(currentTime, duration || 0)}
              onInput={handleSeek}
              onChange={handleSeek}
              disabled={duration === 0}
              className={styles.ProgressBar}
              aria-label='Progresso do audio'
            />
            <div className={styles.TimeRow}>
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ScenarioAudioButton;

ScenarioAudioButton.propTypes = {
  scenario: PropTypes.string,
};
