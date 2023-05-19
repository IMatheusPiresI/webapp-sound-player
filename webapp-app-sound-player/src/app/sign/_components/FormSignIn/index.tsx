'use client';

import { Button } from '@/components/Button';
import { InputForm } from '@/components/Form/InputForm';
import Image from 'next/image';
import React, { useState } from 'react';
import { IState } from './types';

export const FormSign: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeValueInput =
    (setState: IState) => (event: React.FormEvent<HTMLInputElement>) => {
      setState(event.currentTarget.value);
    };

  return (
    <form className="px-4 py-6 border border-white rounded-lg max-w-lg w-full">
      <div className="flex flex-col items-center">
        <div className="border border-white rounded-full w-36 h-36 flex items-center justify-center bg-white/[0.4]">
          <Image
            src="/phone-hearth.png"
            alt="phone hearth"
            width={120}
            height={100}
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <h2 className="mt-8 text-3xl font-bold text-white tracking-wider">
            Sign
          </h2>
          <div className="mt-12 w-full">
            <InputForm
              type="email"
              label="E-mail"
              id="email"
              required
              value={email}
              onChange={handleChangeValueInput(setEmail)}
              autoCorrect="off"
            />
          </div>
          <div className="mt-6 w-full">
            <InputForm
              type="password"
              label="Password"
              id="password"
              required
              value={password}
              onChange={handleChangeValueInput(setPassword)}
            />
          </div>
        </div>
        <div className="w-full mt-16 flex items-center justify-center">
          <div className="max-w-xs w-full">
            <Button title="Enter" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormSign;
