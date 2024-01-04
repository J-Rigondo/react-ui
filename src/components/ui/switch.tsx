'use client';

import classNames from 'classnames';

type SwitchSize = 'default' | 'sm' | 'lg';

const switchSizes: Record<SwitchSize, string[]> = {
  default: ['h-6 w-11', 'h-5 w-5'],
  sm: ['h-5 w-9', 'h-4 w-4'],
  lg: ['h-7 w-[52px]', 'h-6 w-6'],
};

type SwitchProps = {
  checked: boolean;
  setChecked: (value: boolean) => void;
  disabled?: boolean;
  size?: SwitchSize;
  backgroundColor?: string;
};

const Switch = ({
  checked,
  setChecked,
  size = 'default',
  backgroundColor = 'bg-teal-600',
  disabled,
}: SwitchProps) => {
  const onChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { checked },
    } = event;

    if (!disabled) setChecked(checked);
  };

  return (
    <label
      className={classNames(
        'flex items-center',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      )}
    >
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          disabled={disabled}
          checked={checked}
          onChange={onChecked}
        />
        <div
          className={classNames(
            'block rounded-full',
            switchSizes[size][0],
            checked ? backgroundColor : 'bg-gray-600 ',
            disabled ? 'cursor-not-allowed opacity-50' : 'opacity-100',
          )}
        />
        <div
          className={classNames(
            'absolute left-0.5 top-0.5 rounded-full bg-white transition dark:bg-gray-200',
            switchSizes[size][1],
            checked && 'translate-x-full',
          )}
        />
      </div>
    </label>
  );
};

export default Switch;
