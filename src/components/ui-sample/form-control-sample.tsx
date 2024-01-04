import React from 'react';
import Switch from '@/components/ui/switch';
import Checkbox from '@/components/ui/checkbox';

const FormControlSample = () => {
  return (
    <div>
      <h2 className="p-5 text-lg font-medium">Switch</h2>
      <div className="flex flex-wrap items-center gap-x-2">
        <Checkbox label="체크박스" />
        <Checkbox backgroundColor="bg-orange-500" label="체크박스" />
        <Checkbox intermediate label="중간" />
      </div>
    </div>
  );
};

export default FormControlSample;
