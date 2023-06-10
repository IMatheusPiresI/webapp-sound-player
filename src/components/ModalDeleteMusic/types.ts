import { IMusic } from '@/services/firebase/musics/types';

type IProps = {
  onClose: () => void;
  music: IMusic | null;
  isVisible: boolean;
};

export type { IProps };
