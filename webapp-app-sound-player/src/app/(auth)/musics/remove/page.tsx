import Image from 'next/image';
import { Header } from '@/components/Header';
import { CardAction } from '@/components/CardAction';

export default async function Remove() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-800 items-center">
      <Header />
      <div className="max-w-screen-2xl w-full flex-1 flex flex-col items-center mt-8 px-4">
        <h1 className="text-white text-3xl font-bold mt-4">
          Admin Area - Music App - Song
        </h1>

        <Image
          src="/phone-song.png"
          alt="phone song"
          width={300}
          height={200}
        />

        <div className="flex-1 w-full flex items-stretch justify-center gap-8">
          <div className="flex-1 flex justify-center gap-10 mt-16">
            <CardAction
              title="Add Musics"
              desc="Add more songs to the app so you can listen to them or create new playlists"
              redirectTo="/musics/add"
            />
            <CardAction
              title="Remove Musics"
              desc="Remove songs from the app, they will also disappear from playlists"
              redirectTo="/musics/remove"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
