import Image from 'next/image';
import { Header } from '@/components/Header';
import { CardAction } from '@/components/CardAction';

export default async function Add() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-800 items-center">
      <Header />
      <section className="max-w-screen-2xl w-full flex-1 flex flex-col items-center mt-8 px-4">
        <h1 className="text-white text-2xl font-bold mt-4">
          Add Musics To App
        </h1>
        <div className="flex-1 w-full flex flex-col items-center mt-10">
          <div className="relative w-full max-w-[250px] h-[325px] border border-white">
            <div className="absolute items-center flex flex-col justify-center w-full h-full">
              <p className="text-white/[0.4] text-center font-medium text-xl">
                MUSIC
                <br />
                BANNER
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
