'use client';

import { IState } from '@/app/sign/_components/FormSignIn/types';
import { InputForm } from '@/components/Form/InputForm';
import React, { useState } from 'react';

export const FormAddMusic = () => {
  const [musicName, setMusicName] = useState<string>('');
  const [musicCreator, setMusicCreator] = useState<string>('');

  const handleChangeValueInput =
    (setState: IState) => (event: React.FormEvent<HTMLInputElement>) => {
      setState(event.currentTarget.value);
    };

  return (
    <form className="flex-1 w-full flex flex-col items-center mt-10">
      <div className="relative w-full max-w-[250px] h-[325px] border border-white">
        <div className="absolute items-center flex flex-col justify-center w-full h-full">
          <p className="text-white/[0.4] text-center font-medium text-xl">
            MUSIC
            <br />
            BANNER
          </p>
        </div>
      </div>

      <div className="mt-12">
        <InputForm
          label="Nome da Música"
          id="music_name"
          type="text"
          value={musicName}
          required
          minLength={3}
          onChange={handleChangeValueInput(setMusicName)}
        />

        <div className="mt-6">
          <InputForm
            label="Criador da Música"
            id="music_creator"
            type="text"
            value={musicCreator}
            required
            minLength={2}
            onChange={handleChangeValueInput(setMusicCreator)}
          />
        </div>
        <div className="mt-6 w-full">
          <select
            name=""
            id=""
            className="w-full p-3 border border-white rounded-lg bg-transparent text-white"
          >
            <option
              className="text-white bg-neutral-800 border border-white hover:bg-neutral-500"
              value="R.A.P"
            >
              R.A.P
            </option>
            <option
              className="text-white bg-neutral-800 border border-white hover:bg-neutral-500"
              value="Funk"
            >
              Funk
            </option>
            <option
              className="text-white bg-neutral-800 border border-white hover:bg-neutral-500"
              value="Dance"
            >
              Dance
            </option>
            <option
              className="text-white bg-neutral-800 border border-white hover:bg-neutral-500"
              value="Pagode"
            >
              Pagode
            </option>
            <option
              className="text-white bg-neutral-800 border border-white hover:bg-neutral-500"
              value="Rock"
            >
              Rock
            </option>
            <option
              className="text-white bg-neutral-800 border border-white hover:bg-neutral-500"
              value="Eletronic"
            >
              Eletronic
            </option>
            <option
              className="text-white bg-neutral-800 border border-white"
              value="P.O.P"
            >
              P.O.P
            </option>
          </select>
        </div>
      </div>
    </form>
  );
};
