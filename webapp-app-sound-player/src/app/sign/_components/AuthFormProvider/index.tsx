'use client';
import { AuthProvider } from '@/contexts/authContext';
import React from 'react';

type IProps = {
  children: React.ReactNode;
};

export const AuthFormProvider: React.FC<IProps> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
