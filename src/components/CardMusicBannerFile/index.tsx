import React from 'react';
import { IProps } from './types';

export const CardMusicBannerFile: React.FC<IProps> = ({
  imageSelected,
  ...rest
}) => {
  return (
    <div className="relative w-full max-w-[250px] h-[325px] border border-white">
      <div className="absolute items-center flex flex-col justify-center w-full h-full">
        <p className="text-white/[0.4] text-center font-medium text-xl">
          MUSIC
          <br />
          BANNER
        </p>
      </div>
      <label
        htmlFor="card_banner"
        className="absolute w-full h-full cursor-pointer z-10"
      />
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg, image/webp"
        name="card_banner"
        id="card_banner"
        className="bg-cyan-300 opacity-0 absolute"
        {...rest}
      />
      {imageSelected && (
        <img
          src={imageSelected}
          alt="music banner"
          className="absolute  w-full max-w-[250px] h-[323px] object-cover"
        />
      )}
    </div>
  );
};
