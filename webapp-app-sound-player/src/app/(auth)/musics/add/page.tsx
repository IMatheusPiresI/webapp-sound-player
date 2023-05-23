import { Header } from '@/components/Header';
import React from 'react';
import { FormAddMusic } from './_components/FormAddMusic';

export default async function Add() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-800 items-center">
      <Header />
      <section className="max-w-screen-2xl w-full flex-1 flex flex-col items-center mt-8 px-4">
        <h1 className="text-white text-2xl font-bold mt-4">
          Add Musics To App
        </h1>
        <FormAddMusic />
      </section>
    </main>
  );
}
