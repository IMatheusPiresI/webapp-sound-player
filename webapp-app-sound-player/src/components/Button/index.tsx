import React from 'react';
import { IProps } from './tyoes';

export const Button: React.FC<IProps> = ({ title, loading, ...rest }) => {
  return (
    <button
      {...rest}
      className="border flex items-center justify-center border-white w-full py-2 rounded-lg text-white text-lg font-medium transition-colors hover:bg-white/[0.1]  uppercase tracking-wide h-12"
    >
      {!loading ? (
        title
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <div
            className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]"
            role="status"
          />
        </div>
      )}
    </button>
  );
};
