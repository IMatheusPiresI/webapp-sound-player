'use client';
import React, { useEffect, useRef, useState } from 'react';
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md';
import { IProps } from './types';

export const VolumeChange: React.FC<IProps> = ({ value, ...rest }) => {
  const volumeRef = useRef<HTMLDivElement>(null);
  const [openVolumeChange, setOpenVolumeChange] = useState<boolean>(false);

  const handleToogleOpenChangeVolume = () => {
    setOpenVolumeChange((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        volumeRef.current &&
        !volumeRef.current.contains(event.target as Node)
      ) {
        setOpenVolumeChange(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative peer flex items-center justify-center"
      ref={volumeRef}
    >
      <button type="button" onClick={handleToogleOpenChangeVolume}>
        {value === 0 ? (
          <MdVolumeOff size={22} color="#fff" />
        ) : (
          <MdVolumeUp size={22} color="#fff" />
        )}
      </button>
      {openVolumeChange && (
        <div className="absolute w-20 h-8 rotate-90 bottom-14 flex z-[999] items-center justify-center">
          <div className="w-full h-4 flex items-center justify-center">
            <input
              type="range"
              className="w-full h-[16px] bg-transparent accent-white rotate-180"
              value={value}
              {...rest}
            />
          </div>
        </div>
      )}
    </div>
  );
};
