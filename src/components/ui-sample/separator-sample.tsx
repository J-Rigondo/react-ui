import Separator from '@/components/ui/separator';
import React from 'react';

const SeparatorSample = () => {
  return (
    <div>
      <h2 className="p-5 text-lg font-medium">Seperator</h2>
      <div className="flex h-5 items-center gap-x-3">
        어제
        <Separator orientation="vertical" />
        오늘
        <Separator orientation="vertical" />
        내일
      </div>
      <Separator className="my-6" />
    </div>
  );
};

export default SeparatorSample;
