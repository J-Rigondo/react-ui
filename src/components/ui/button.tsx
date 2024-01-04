'use client';

import React from 'react';
import classNames from 'classnames';
import { FaCircleNotch } from 'react-icons/fa';

export type VariantName = 'default' | 'primary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'default' | 'sm' | 'lg';

const variants: Record<VariantName, string> = {
  default: '',
  primary: 'bg-brand text-white hover:bg-brand/90',
  outline:
    'border border-gray-300 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700',
  ghost: 'hover:bg-slate-100 dark:hover:bg-slate-700',
  link: 'text-brand underline-offset-4 hover:underline',
};

const buttonSizes: Record<ButtonSize, string> = {
  default: 'h-10 px-4 py-2 text-sm',
  sm: 'h-9 px-3 text-sm',
  lg: 'h-11 px-8',
};

const loaderSizes: Record<ButtonSize, string> = {
  default: 'w-5 h-5',
  sm: 'w-4 h-4',
  lg: 'w-6 h-6',
};

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  variant?: VariantName;
  size?: ButtonSize;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      className,
      isLoading,
      disabled,
      variant = 'default',
      size = 'default',
      fullWidth,
      onClick,
      ...buttonProps
    },
    ref,
  ) => {
    const ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick && onClick(event);
    };

    return (
      <button
        ref={ref}
        className={classNames(
          'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md text-center font-medium tracking-wider outline-none transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50',
          variants[variant],
          buttonSizes[size],
          fullWidth && 'w-full',
          className,
        )}
        onClick={ClickHandler}
        disabled={disabled || isLoading}
        {...buttonProps}
      >
        <span
          className={classNames(
            'flex items-center justify-center',
            isLoading && 'invisible opacity-0',
          )}
        >
          {children}
        </span>

        {isLoading && (
          <span className="absolute inset-0 flex h-full w-full items-center justify-center">
            <FaCircleNotch
              className={classNames('animate-spin', loaderSizes[size])}
            />
          </span>
        )}
      </button>
    );
  },
);

export default Button;

Button.displayName = 'Button';
