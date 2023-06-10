import { ButtonHTMLAttributes } from 'react';

type IProps = {
  title: string;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type { IProps };
