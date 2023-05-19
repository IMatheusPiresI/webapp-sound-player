import { InputHTMLAttributes } from 'react';

type IProps = {
  type: 'email' | 'password' | 'text';
  id: string;
  label: string;
  value: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type { IProps };
