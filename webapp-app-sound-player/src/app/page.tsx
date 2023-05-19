import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-800 items-center">
      <header className="max-w-screen-2xl w-full border-b-2 border-neutral-700">
        <div className="flex items-center">
          <Image
            src="/phone-hearth.png"
            alt="phone hearth"
            width={60}
            height={60}
          />
          <p className="text-white text-lg ml-2 font-bold">Music App - Song</p>
        </div>
      </header>
      <div className="max-w-screen-2xl w-full flex-1 flex flex-col items-center mt-8 px-4">
        <h1 className="text-white text-3xl font-bold mt-4">
          Welcome to Music App - Song Web App
        </h1>

        <div className="flex-1 w-full flex items-stretch justify-center gap-8">
          <div className="flex-1 flex items-center justify-center gap-10">
            <div className="border border-white rounded-lg flex-1 flex flex-col items-center justify-center w-full h-full max-w-xs max-h-96 relative overflow-hidden">
              <div className="absolute opacity-10">
                <Image
                  src="/phone-hearth.png"
                  alt="phone hearth"
                  width={250}
                  height={250}
                />
              </div>
              <div className="z-10 w-full h-full bg-black/[0.20] flex flex-col items-center justify-center">
                <p className="text-white text-2xl font-bold text-center absolute top-28">
                  Add Musics
                </p>
                <p className="text-white text-md font-medium text-center px-8 mt-12">
                  Add more songs to the app so you can listen to them or create
                  new playlists
                </p>
              </div>
            </div>
            <div className="border border-white rounded-lg flex-1 flex flex-col items-center justify-center w-full h-full max-w-xs max-h-96 relative overflow-hidden">
              <div className="absolute -translate-y-5 opacity-10">
                <Image
                  src="/phone-song.png"
                  alt="phone song"
                  width={400}
                  height={300}
                />
              </div>
              <div className="z-10 w-full h-full bg-black/[0.20] flex flex-col items-center justify-center">
                <p className="text-white text-2xl font-bold text-center absolute top-28">
                  Remove Musics
                </p>
                <p className="text-white text-md font-medium text-center px-8 mt-12">
                  Remove songs from the app, they will also disappear from
                  playlists
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
