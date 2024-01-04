'use client';

import React, { useContext } from 'react';
import { ModalContext } from '@/components/ui/modal/index';
import Button, { IButtonProps } from '@/components/ui/button';

export interface IModalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const ModalCancel = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      className,
      disabled,
      variant = 'default',
      size = 'default',
      onClick,
      ...buttonProps
    },
    ref,
  ) => {
    const { closeModal } = useContext(ModalContext);

    const onModalCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick && onClick(event);
      closeModal();
    };

    return (
      <Button
        ref={ref}
        className={className}
        onClick={onModalCancel}
        disabled={disabled}
        variant={variant}
        size={size}
      >
        {children}
      </Button>
    );
  },
);

export default ModalCancel;

ModalCancel.displayName = 'ModalCancel';
