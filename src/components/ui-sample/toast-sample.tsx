'use client';

import React from 'react';
import Button from '@/components/ui/button';
import { toast } from 'react-toastify';

const ToastSample = () => {
  return (
    <div>
      <h2 className="p-5 text-lg font-medium">Toast</h2>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          className="bg-sky-600 text-white"
          onClick={() => toast.info('info', { position: 'top-center' })}
        >
          info
        </Button>
        <Button
          className="bg-teal-500 text-white"
          onClick={() => toast.success('info', { position: 'bottom-center' })}
        >
          success
        </Button>
        <Button
          className="bg-amber-500 text-white"
          onClick={() => toast.warning('info', { position: 'top-right' })}
        >
          warning
        </Button>
        <Button
          className="bg-red-600 text-white"
          onClick={() => toast.error('info', { position: 'top-left' })}
        >
          error
        </Button>
      </div>
    </div>
  );
};

export default ToastSample;
