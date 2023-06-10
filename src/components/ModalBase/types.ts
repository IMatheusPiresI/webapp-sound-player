import { ReactNode } from 'react';

type IProps = {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
};

export type { IProps };
