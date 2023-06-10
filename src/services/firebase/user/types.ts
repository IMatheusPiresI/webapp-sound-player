import { IMusic } from '../musics/types';

type IUser = {
  email: string;
  favorites: IMusic[];
  id: string;
  name: string;
  photoURL: string;
};

export type { IUser };
