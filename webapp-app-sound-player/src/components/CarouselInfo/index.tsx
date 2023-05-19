import Image from 'next/image';
import React from 'react';

export const CarouselInfo: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center relative h-full overflow-hidden">
      <div className="flex flex-col items-center max-w-md absolute animate-hide_first_sign">
        <Image
          src="/phone-hearth.png"
          alt="phone hearth"
          width={250}
          height={250}
        />
        <div className="flex flex-col items-center">
          <h2 className="text-white font-bold text-2xl">Musical Motivation</h2>
          <p className="text-white mt-8 text-justify">
            The Music App - Song application was created to solve the problem of
            advertisements that this developer suffered, that is, when tired of
            receiving advertisement after advertisement, the developer decided
            to create his own music app.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center max-w-md absolute animate-hide_second_sign">
        <Image
          src="/phone-song.png"
          alt="phone hearth"
          width={400}
          height={250}
        />
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-white font-bold text-2xl">Web App Objective</h2>
          <p className="text-white mt-8 text-justify">
            The Music App - Song application was created to solve the problem of
            advertisements that this developer suffered, that is, when tired of
            receiving advertisement after advertisement, the developer decided
            to create his own music app.
          </p>
        </div>
      </div>
      <div className="absolute bottom-12 w-full flex items-center justify-center gap-4">
        <div className="h-4 bg-white border border-white rounded-lg animate-wiggle" />
        <div className="h-4 bg-white border border-white rounded-lg animate-wiggle_reverse" />
      </div>
    </div>
  );
};
