import React from 'react';
import { Portal } from '../Portal';
import { IProps } from './types';

export const ModalBase: React.FC<IProps> = ({
  onClose,
  children,
  isVisible,
}) => {
  const handleCloseModalOnClickOutside = (event: React.FormEvent) => {
    const target = event.target as Element;

    if (target.id === 'modal_overlay') {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <Portal>
      <div
        id="modal_overlay"
        className="fixed lef-0 bottom-0 right-0 top-0 z-50 bg-black/[0.4] flex items-center justify-center w-full"
        onClick={handleCloseModalOnClickOutside}
      >
        {children}
      </div>
    </Portal>
  );
};
