import { getAllMusics } from '@/services/firebase/musics';
import { IMusic } from '@/services/firebase/musics/types';
import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

type IChildren = {
  children: ReactNode;
};

type IMusicContextValues = {
  allMusics: IMusic[];
  setAllMusics: React.Dispatch<React.SetStateAction<IMusic[]>>;
  addMusicToList: (music: IMusic) => void;
  removeMusicFromList: (musicId: string) => void;
};

export const MusicContext = createContext({} as IMusicContextValues);

export const MusicProvider: React.FC<IChildren> = ({ children }) => {
  const [allMusics, setAllMusics] = useState<IMusic[]>([]);

  const getMusics = useCallback(async () => {
    if (allMusics.length === 0) {
      const musics = await getAllMusics();

      setAllMusics(musics);
    }
  }, [allMusics]);

  const addMusicToList = (music: IMusic) => {
    setAllMusics((prevState) => [...prevState, music]);
  };

  const removeMusicFromList = (musicId: string) => {
    setAllMusics((prevState) =>
      prevState.filter((music) => music.id !== musicId)
    );
  };

  useEffect(() => {
    getMusics();
  }, [getMusics]);

  return (
    <MusicContext.Provider
      value={{
        allMusics,
        setAllMusics,
        addMusicToList,
        removeMusicFromList,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
