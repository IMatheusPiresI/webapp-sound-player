import { IMusic } from '@/services/firebase/musics/types';
import { InputHTMLAttributes } from 'react';

type IProps = {
  music: IMusic;
  isPlaying: boolean;
  onActionPlayPause: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

export type { IProps };
