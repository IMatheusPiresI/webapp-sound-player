import React from 'react';
import { IProps } from './tyoes';

export const Button: React.FC<IProps> = ({ title, ...rest }) => {
  return (
    <button
      {...rest}
      className="border border-white w-full py-2 rounded-lg text-white text-lg font-medium transition-colors hover:bg-white/[0.1]  uppercase tracking-wide"
    >
      {title}
    </button>
  );
};
