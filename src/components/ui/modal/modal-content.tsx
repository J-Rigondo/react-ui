'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { ModalContext } from '@/components/ui/modal/index';
import classNames from 'classnames';

type ModalSize = 'default' | 'sm' | 'lg';

const modalSizes: Record<ModalSize, string> = {
  default: 'max-w-2xl',
  sm: 'max-w-md',
  lg: 'max-w-3xl',
};

type ModalContentProps = {
  children: React.ReactNode;
  size?: ModalSize;
};

const ModalContent = ({ size = 'default', children }: ModalContentProps) => {
  const { isOpen, closeModal } = useContext(ModalContext);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden p-4 text-center sm:p-6 lg:p-8 xl:p-10 3xl:p-12"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 z-40 cursor-pointer bg-gray-700 bg-opacity-60 backdrop-blur-sm" />
          </Transition.Child>

          {/* auto focus 방지 */}
          <div className="sr-only">
            <button
              className="opacity-50 hover:opacity-80"
              onClick={closeModal}
            >
              <MdClose className="h-auto w-[13px]" />
            </button>
          </div>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-105"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-105"
          >
            <div
              className={classNames(
                'fixed left-[50%] top-[50%] z-50 w-full translate-x-[-50%] translate-y-[-50%] rounded-md border bg-white p-6 text-left shadow-md dark:border-gray-800 dark:bg-gray-800',
                modalSizes[size],
              )}
            >
              {children}
              <div
                className="absolute right-4 top-4 cursor-pointer rounded-sm opacity-70 transition-opacity hover:opacity-100"
                onClick={closeModal}
              >
                <MdClose className="h-4 w-4" />
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalContent;
