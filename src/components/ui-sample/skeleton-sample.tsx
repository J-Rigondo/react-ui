import React from 'react';
import Skeleton from '@/components/ui/skeleton';

const SkeletonSample = () => {
  return (
    <div>
      <h2 className="p-5 text-lg font-medium">Skeleton</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <Skeleton className="aspect-video h-full w-full p-2" />
        <Skeleton className="aspect-video h-full w-full p-2" />
        <Skeleton className="aspect-video h-full w-full p-2" />
        <Skeleton className="aspect-video h-full w-full p-2" />
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="my-6 flex items-center gap-x-4">
            <div className="relative h-[60px] w-[60px]">
              <Skeleton className="absolute h-full w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-10 w-[200px]" />
              <div className="flex items-center">
                <Skeleton className="mr-2 h-4 w-4" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
          </div>
          <div className="my-6 flex items-center gap-x-4">
            <div className="relative h-[60px] w-[60px]">
              <Skeleton className="absolute h-full w-full" roundedFull />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-10 w-[200px]" />
              <div className="flex items-center">
                <Skeleton className="mr-2 h-4 w-4" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <ol className="mt-4 space-y-4">
            <Skeleton className="h-10 w-[80%]" />
            <Skeleton className="h-12 w-[50%]" />
            <Skeleton className="h-8 w-[70%]" />
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SkeletonSample;
