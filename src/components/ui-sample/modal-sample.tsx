'use client';

import ModalButton from '@/components/ui/modal/modal-button';
import { MdAdd } from 'react-icons/md';
import ModalContent from '@/components/ui/modal/modal-content';
import Modal from '@/components/ui/modal';
import React from 'react';
import Button from '@/components/ui/button';
import ModalCancel from '@/components/ui/modal/modal-cancel';

const ModalSample = () => {
  return (
    <div>
      <h2 className="p-5 text-lg font-medium">Modal</h2>
      <div className="flex items-center gap-2">
        <Modal>
          <ModalButton className="flex items-center rounded-md bg-sky-600 px-4 py-2 font-medium text-white">
            <MdAdd className="mr-1.5 h-5 w-5" />
            모달 열기
          </ModalButton>
          <ModalContent>
            <div>
              <h2 className="text-lg font-medium">모달 제목 타이틀</h2>
              <input type="text" placeholder="......enter" />
              <div className="flex h-[300px] items-center justify-center">
                모달 내용
              </div>
            </div>
          </ModalContent>
        </Modal>

        <Modal>
          <ModalButton className="flex items-center rounded-md bg-cyan-600 px-4 py-2 font-medium text-white">
            확인
          </ModalButton>
          <ModalContent size="sm">
            <div>
              <h2 className="text-lg font-medium">제목 수정</h2>
              <div className="flex h-[70px] items-center justify-center">
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  한번 수정하면 되돌릴 수 없어요. 정말 진심으로 수정 하시겠어요?
                </p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <Button variant="primary" size="sm">
                  수정하기
                </Button>
                <ModalCancel
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    alert('모달취소');
                  }}
                >
                  취소
                </ModalCancel>
              </div>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default ModalSample;
