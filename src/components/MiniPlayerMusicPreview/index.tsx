'use client';

import React, { useEffect, useRef, useState } from 'react';
import { IProps } from './types';

import { MdPause, MdPlayArrow, MdVolumeUp } from 'react-icons/md';
import { VolumeChange } from '../VolumeChange';

export const MiniPlayerMusicPreview: React.FC<IProps> = ({ audio, name }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState(100);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayMusic = () => {
    setIsPlaying(true);
    audioRef.current?.play();
  };

  const handlePauseMusic = () => {
    setIsPlaying(false);
    audioRef.current?.pause();
  };

  const handleChangeDuration = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef?.current) return;
    audioRef.current.currentTime = event.target.valueAsNumber;
  };

  const handleChangeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef?.current) return;
    setVolume(event.target.valueAsNumber);
    audioRef.current.volume = event.target.valueAsNumber / 100;
  };

  useEffect(() => {
    if (audioRef.current && audioRef.current?.duration) {
      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current?.currentTime ?? 0);
      };
    }
  }, [audioRef.current?.duration]);

  useEffect(() => {
    if (audioRef.current && audio) {
      audioRef.current.pause();
      audioRef.current.load();
      setIsPlaying(false);
    }
  }, [audio]);

  if (!audio) return null;

  return (
    <div className="h-16 w-full flex items-center border border-white px-2 relative ">
      <audio
        controls
        ref={audioRef}
        className="z-50 opacity-0 pointer-events-none absolute w-0 h-0"
      >
        <source src={audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="w-full flex items-center">
        {!isPlaying ? (
          <button type="button" onClick={handlePlayMusic}>
            <MdPlayArrow size={28} color="#fff" />
          </button>
        ) : (
          <button type="button" onClick={handlePauseMusic}>
            <MdPause size={28} color="#fff" />
          </button>
        )}
        <p className="text-white text-md truncate px-4 w-full">{name}</p>
        <VolumeChange value={volume} max={100} onChange={handleChangeVolume} />
      </div>

      <div className="flex items-center accent-white range-xs absolute bottom-[-1px] left-[-1px] right-[-1px]">
        <input
          type="range"
          className="w-full h-[4px] bg-transparent border-none"
          onChange={handleChangeDuration}
          value={currentTime}
          min={0}
          max={audioRef.current?.duration}
        />
      </div>
    </div>
  );
};
