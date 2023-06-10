import React from 'react';
import { MdDelete, MdPause, MdPlayArrow } from 'react-icons/md';
import { IProps } from './types';

export const ItemMusicListPlay: React.FC<IProps> = ({
  music,
  isPlaying,
  onDelete,
  ...rest
}) => {
  return (
    <div className="w-full flex items-center bg-black/[0.2] px-4 py-2 mb-2">
      <button type="button" {...rest}>
        {isPlaying ? (
          <MdPause size={28} color="#fff" />
        ) : (
          <MdPlayArrow size={28} color="#fff" />
        )}
      </button>
      <div className="w-12 h-12 ml-2">
        <img
          src={music.imageBanner}
          alt="music banner"
          className="w-12 h-12 object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden ml-2">
        <p className="truncate text-white/[0.8]">{music.musicName}</p>
        <p className="truncate text-white/[0.3]">{music.creator}</p>
      </div>
      <div className="w-20 ml-4 hidden sm:flex">
        <p className="truncate text-sm text-white/[0.8]">{music.musicGenre}</p>
      </div>
      <div>
        <button type="button" onClick={onDelete}>
          <MdDelete size={30} color="red" />
        </button>
      </div>
    </div>
  );
};
