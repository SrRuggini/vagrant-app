'use client';

import React, { useRef, useState } from 'react';

const ScenarioAudioButton = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Unable to play audio:', error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/scenarios/shelter-from-the-storm.wav"
        onEnded={() => setIsPlaying(false)}
      />
      <button type="button" onClick={handleToggleAudio}>
        {isPlaying ? 'Pausar audio' : 'Tocar audio'}
      </button>
    </>
  );
};

export default ScenarioAudioButton;