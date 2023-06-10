import React from 'react';
import { MdPause, MdPlayArrow } from 'react-icons/md';
import { IProps } from './types';

export const MiniPlayer: React.FC<IProps> = ({
  music,
  isPlaying,
  value,
  onActionPlayPause,
  ...rest
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 flex items-center  bg-neutral-900  ">
      <div className="flex items-center accent-white range-xs absolute top-0 w-full z-10">
        <input
          type="range"
          className="w-full h-[4px] bg-transparent border-none"
          {...rest}
          value={value}
        />
      </div>
      <div className="relative w-full h-full flex items-center px-8 py-2">
        <div className="w-16 h-16 ml-2">
          <img
            src={music.imageBanner}
            alt="music banner"
            className="w-16 h-16 object-cover"
          />
        </div>
        <div className="flex flex-col flex-1 overflow-hidden ml-2">
          <p className="truncate font-bold text-white/[0.8]">
            {music.musicName}
          </p>
          <p className="truncate font-medium text-white/[0.3]">
            {music.creator}
          </p>
        </div>
        <div className="w-40 ml-4 hidden sm:flex">
          <p className="truncate font-bold text-white/[0.8]">
            {music.musicGenre}
          </p>
        </div>
        <button type="button" onClick={onActionPlayPause}>
          {isPlaying ? (
            <MdPause size={46} color="#fff" />
          ) : (
            <MdPlayArrow size={46} color="#fff" />
          )}
        </button>
      </div>
    </div>
  );
};
