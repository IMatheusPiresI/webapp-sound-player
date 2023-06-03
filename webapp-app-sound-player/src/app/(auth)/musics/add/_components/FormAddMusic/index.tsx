'use client';

import { Button } from '@/components/Button';
import { InputForm } from '@/components/Form/InputForm';
import { useFormik } from 'formik';
import React, { ChangeEvent, useState } from 'react';
import { musicAddSchema } from './schemas/musicAdd';
import { IMusicSchema } from './types';
import { CardMusicBannerFile } from '@/components/CardMusicBannerFile';
import { CardMusicFileMP3 } from '@/components/CardMusicFileMP3';
import { storageRef } from '@/services/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { IMusic } from '@/services/firebase/musics/types';
import { v4 as uuid } from 'uuid';
import { addMusic } from '@/services/firebase/musics';
export const FormAddMusic = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [audioSelected, setAudioSelected] = useState<File | null>(null);
  const [imageMusicBanner, setImageMusicBanner] = useState<string | undefined>(
    undefined
  );

  const initialValues = {
    musicName: '',
    musicCreator: '',
    musicGenre: '',
  };
  const formik = useFormik<IMusicSchema>({
    initialValues,
    validationSchema: musicAddSchema,
    onSubmit: () => handleSave(),
  });

  const resetForm = () => {
    formik.resetForm({ values: initialValues });
    setImageMusicBanner(undefined);
    setAudioSelected(null);
  };

  const handleSave = async () => {
    if (!audioSelected || !imageMusicBanner) return;
    setLoading(true);
    try {
      const fileRef = ref(storageRef, formik.values.musicName);
      await uploadBytes(fileRef, audioSelected);
      const downloadURL = await getDownloadURL(fileRef);

      const music: IMusic = {
        musicName: formik.values.musicName,
        musicGenre: formik.values.musicGenre,
        creator: formik.values.musicCreator,
        id: uuid(),
        imageBanner: imageMusicBanner,
        url: downloadURL,
      };

      await addMusic(music);
      resetForm();
    } catch (error) {
      console.error('Failed to upload file:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageMusicBanner(reader.result as string);
      };
      event.target.value = '';
    }
  };

  return (
    <form
      className="flex-1 w-full flex flex-col items-center mt-10 pb-10"
      onSubmit={formik.handleSubmit}
    >
      <div className="max-w-xl w-full">
        <div className="w-full flex items-center justify-center mb-12 overflow-hidden">
          <CardMusicBannerFile
            onChange={handleSelectImage}
            imageSelected={imageMusicBanner}
          />
        </div>
        <CardMusicFileMP3
          audioSelected={audioSelected}
          onSelectAudioCallback={setAudioSelected}
        />
        <select
          name="genre_music"
          id="genre_music"
          defaultValue="Gênero da Música"
          required
          value={formik.values.musicGenre}
          onChange={formik.handleChange('musicGenre')}
          className="w-full mt-6 p-3 border border-white rounded-lg bg-transparent text-white outline-none"
        >
          <option
            className="text-white bg-neutral-800 border border-white hover:bg-neutral-500"
            value="Gênero da Música"
          >
            Gênero da Música
          </option>
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

        <div className="mt-6">
          <InputForm
            label="Nome da Música"
            id="music_name"
            type="text"
            value={formik.values.musicName}
            required
            minLength={3}
            onChange={formik.handleChange('musicName')}
          />
        </div>

        <div className="mt-6">
          <InputForm
            label="Criador da Música"
            id="music_creator"
            type="text"
            value={formik.values.musicCreator}
            required
            minLength={2}
            onChange={formik.handleChange('musicCreator')}
          />
        </div>
        <div className="mt-6 w-full">
          <Button
            title="Add Music"
            type="submit"
            disabled={!formik.isValid}
            loading={loading}
          />
        </div>
      </div>
    </form>
  );
};
