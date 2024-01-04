'use client';

import React, { useState } from 'react';
import Switch from '@/components/ui/switch';

const SwitchSample = () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);

  return (
    <div>
      <h2 className="p-5 text-lg font-medium">Switch</h2>
      <div className="flex flex-wrap items-center gap-2">
        <Switch
          checked={checked}
          setChecked={setChecked}
          size="sm"
          backgroundColor="bg-violet-600"
        />
        <Switch checked={checked} setChecked={setChecked} />
        <Switch
          checked={checked}
          setChecked={setChecked}
          size="lg"
          backgroundColor="bg-sky-600"
        />
        <Switch checked={checked1} setChecked={setChecked1} disabled />
      </div>
    </div>
  );
};

export default SwitchSample;
