import Badge from '@/components/ui/badge';
import React from 'react';

const BadgeSample = () => {
  return (
    <div>
      <h2 className="p-5 text-lg font-medium">Badge</h2>
      <div className="flex flex-wrap items-center gap-2">
        <Badge backgroundColor="bg-amber-500">뱃지</Badge>
        <Badge backgroundColor="bg-yellow-500">badge</Badge>
        <Badge backgroundColor="bg-teal-600">badge</Badge>
        <Badge backgroundColor="bg-sky-600">badge</Badge>
        <Badge backgroundColor="bg-red-600">badge</Badge>
        <Badge backgroundColor="bg-violet-600">badge</Badge>
        <Badge backgroundColor="bg-gray-600">badge</Badge>
      </div>
    </div>
  );
};

export default BadgeSample;
