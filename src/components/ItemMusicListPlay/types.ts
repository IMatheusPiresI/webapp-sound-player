import { IMusic } from '@/services/firebase/musics/types';
import { ButtonHTMLAttributes } from 'react';

type IProps = {
  music: IMusic;
  isPlaying: boolean;
  onDelete: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type { IProps };
