'use client';

import React, { createContext, useState } from 'react';

type ModalProps = {
  children: React.ReactNode;
};

type ModalContextProps = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});
const Modal = ({ children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default Modal;
