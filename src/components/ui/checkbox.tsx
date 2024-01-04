'use client';

import { useState } from 'react';
import { FaCheck, FaMinus } from 'react-icons/fa';
import classNames from 'classnames';

type CheckboxProps = {
  backgroundColor?: string;
  borderColor?: string;
  label?: string;
  intermediate?: boolean;
  onCheck?: () => void;
};

const Checkbox = ({
  backgroundColor = 'bg-brand',
  borderColor = 'border-gray-600',
  label,
  intermediate = false,
  onCheck,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const onClick = () => {
    onCheck && onCheck();
    setIsChecked((prev) => !prev);
  };

  const onLabelClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="inline-flex items-center gap-x-2">
      <div
        className={classNames(
          'relative flex h-5 w-5 items-center justify-center rounded transition-all',
          !isChecked && !intermediate && 'border-2 ' + borderColor,
          (isChecked || intermediate) && backgroundColor,
        )}
        onClick={onClick}
      >
        {intermediate && !isChecked && (
          <div className="">
            <FaMinus className="h-3 w-3 text-white" />
          </div>
        )}
        {isChecked && (
          <div className="absolute">
            <FaCheck className="h-3 w-3 text-white" />
          </div>
        )}
      </div>
      {label && (
        <span className="select-none" onClick={onLabelClick}>
          {label}
        </span>
      )}
    </div>
  );
};

export default Checkbox;
