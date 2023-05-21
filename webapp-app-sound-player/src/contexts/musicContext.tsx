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

export const MusicContext = createContext({});

export const MusicProvider: React.FC<IChildren> = ({ children }) => {
  const [allMusics, setAllMusics] = useState<IMusic[]>([]);

  const getMusics = useCallback(async () => {
    if (allMusics.length === 0) {
      const musics = await getAllMusics();

      setAllMusics(musics);
    }
  }, []);

  useEffect(() => {
    getMusics();
  }, [getMusics]);

  return (
    <MusicContext.Provider
      value={{
        allMusics,
        setAllMusics,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
