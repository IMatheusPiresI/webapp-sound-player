import Image from 'next/image';
import { Header } from '@/components/Header';
import { ListMusics } from './_components/ListMusics';

export default async function Remove() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-800 items-center">
      <Header />
      <div className="max-w-screen-2xl w-full flex-1 flex flex-col items-center mt-8 px-4">
        <h1 className="text-white text-3xl font-bold mt-4 text-center">
          Wanted Songs Remover
        </h1>

        <Image
          src="/phone-song.png"
          alt="phone song"
          width={300}
          height={200}
        />

        <div className="w-full max-w-lg mt-8">
          <ListMusics />
        </div>
      </div>
    </main>
  );
}
