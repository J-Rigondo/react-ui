import classNames from 'classnames';
import React from 'react';

type BadgeProps = {
  backgroundColor?: string;
  textColor?: string;
  children: React.ReactNode;
};
const Badge = ({ backgroundColor, textColor, children }: BadgeProps) => {
  return (
    <div
      className={classNames(
        'inline-flex items-center justify-center rounded-full px-2.5 py-1 text-xs hover:opacity-90',
        backgroundColor && backgroundColor,
        textColor ? textColor : 'text-white',
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
