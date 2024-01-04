'use client';

import React, { useContext } from 'react';
import { ModalContext } from '@/components/ui/modal/index';

export interface IModalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const ModalButton = React.forwardRef<HTMLButtonElement, IModalButtonProps>(
  ({ className, children }, ref) => {
    const { openModal } = useContext(ModalContext);

    return (
      <button ref={ref} className={className} onClick={openModal}>
        {children}
      </button>
    );
  },
);

export default ModalButton;

ModalButton.displayName = 'ModalButton';
