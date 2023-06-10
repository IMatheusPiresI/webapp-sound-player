import Image from 'next/image';
import React from 'react';
import { IProps } from './types';
import Link from 'next/link';

export const CardAction: React.FC<IProps> = ({ title, desc, redirectTo }) => {
  return (
    <Link
      href={redirectTo}
      className="border border-white rounded-lg flex-1 flex flex-col items-center justify-center w-full h-full max-w-xs max-h-96 relative overflow-hidden"
    >
      <div className="absolute opacity-10">
        <Image
          src="/phone-hearth.png"
          alt="phone hearth"
          width={250}
          height={250}
        />
      </div>
      <div className="z-10 w-full h-full bg-black/[0.20] hover:bg-white/[0.05] transition-all flex flex-col items-center justify-center">
        <p className="text-white text-2xl font-bold text-center absolute top-28">
          {title}
        </p>
        <p className="text-white text-md font-medium text-center px-8 mt-12">
          {desc}
        </p>
      </div>
    </Link>
  );
};
