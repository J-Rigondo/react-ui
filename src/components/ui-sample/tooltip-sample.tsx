'use client';

import React from 'react';
import Tooltip from '@/components/ui/tooltip';
import Button from '@/components/ui/button';
import { MdInfo } from 'react-icons/md';
import { Tooltip as RTooltip } from 'react-tooltip';

const TooltipSample = () => {
  return (
    <div>
      <h2 className="p-5 text-lg font-medium">Tooltip</h2>
      {/*<div className="mb-6">*/}
      {/*  <Tooltip message="flex outer 테스트용이에요">*/}
      {/*    <Button className="bg-orange-500 text-white hover:bg-orange-600">*/}
      {/*      hover*/}
      {/*    </Button>*/}
      {/*  </Tooltip>*/}
      {/*</div>*/}

      <div className="flex flex-wrap items-center gap-2">
        {/*<Tooltip message="툴팁 정보를 제공해드려요">*/}
        {/*  <Button variant="primary">hover</Button>*/}
        {/*</Tooltip>*/}

        <Tooltip message="아이콘 툴팁 정보에요">
          <span>
            <MdInfo className="h-10 w-10 text-gray-600" />
          </span>
        </Tooltip>
      </div>
    </div>
  );
};

export default TooltipSample;
