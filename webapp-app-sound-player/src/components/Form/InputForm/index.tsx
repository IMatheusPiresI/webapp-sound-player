'use client';

import React, { useCallback, useState } from 'react';
import { IProps } from './types';
import { FiAtSign } from 'react-icons/fi';
import { MdLock } from 'react-icons/md';

export const InputForm: React.FC<IProps> = ({
  type,
  id,
  label,
  value,
  ...rest
}) => {
  console.log(value);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleToggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const renderIcon = useCallback(() => {
    if (type === 'email') return <FiAtSign color="white" size={24} />;
    if (type === 'password')
      return (
        <MdLock color="white" size={24} onClick={handleToggleShowPassword} />
      );

    return null;
  }, [type]);

  return (
    <div className="w-full border border-white rounded-md flex items-center relative">
      <input
        type={!showPassword ? type : 'text'}
        id={id}
        className="w-full bg-transparent border-none px-4 py-3 pr-14 text-white text-lg outline-0 peer autofill:shadow-[inset_0_0_0px_1000px_rgb(86, 86, 74)]"
        value={value}
        {...rest}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 text-white font-medium  peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:-translate-x-2 peer-valid:-translate-x-2 peer-valid:-translate-y-7 peer-valid:text-xs transition-all bg-neutral-800 px-1
    ${value.length > 0 && '-translate-x-2 -translate-y-7 text-xs'}            `}
      >
        {label}
      </label>

      <div className="absolute right-4">{renderIcon()}</div>
    </div>
  );
};
