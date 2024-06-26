"use client"
import { useState, useRef, useEffect } from 'react';
import playIcon from '../../sources/mic-Black.svg';
import pauseIcon from '../../sources/mic-off.svg';

const AudioPlayer = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='audioComp'>
      {audio && (
        <>
          <audio ref={audioRef} src={audio}/>
          <button className={`${isPlaying? 'play': 'paused'} audiobutton`} onClick={togglePlayPause} alt="Play/Pause">
          </button>
        </>
      )}
    </div>
  );
};

export default AudioPlayer;

