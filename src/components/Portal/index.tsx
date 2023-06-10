'use client';

import React from 'react';
import { IProps } from './types';
import ReactDOM from 'react-dom';

export const Portal: React.FC<IProps> = ({ children }) => {
  if (window) {
    return ReactDOM.createPortal(children, document.body);
  }

  return null;
};
