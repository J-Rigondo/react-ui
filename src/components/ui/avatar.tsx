'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import classNames from 'classnames';

type AvatarSize = 'default' | 'sm' | 'lg';
type AvatarRadius = 'full' | 'md';

const avatarSizes: Record<AvatarSize, string> = {
  default: 'h-10 w-10',
  sm: 'h-8 w-8',
  lg: 'h-12 w-12',
};

const avatarRadius: Record<AvatarRadius, string> = {
  full: 'rounded-full',
  md: 'rounded-md',
};

interface IAvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  size?: AvatarSize;
  radius?: AvatarRadius;
  fallback: React.ReactNode;
}
const Avatar = ({
  className,
  src,
  size = 'default',
  radius = 'full',
  fallback,
}: IAvatarProps) => {
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsError(true);
  };

  return (
    <span
      className={classNames(
        'relative flex shrink-0 items-center justify-center overflow-hidden bg-sky-500',
        avatarSizes[size],
        avatarRadius[radius],
        className,
      )}
    >
      {isError || !src ? (
        <span className="font-medium">{fallback}</span>
      ) : (
        <Image
          className="object-cover"
          fill
          src={src}
          alt="avatar"
          onError={handleError}
        />
      )}
    </span>
  );
};

export default Avatar;
