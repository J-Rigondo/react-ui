import { ElementRef, useRef } from 'react';

type TooltipProps = {
  children: React.ReactNode;
  message: string;
};
const Tooltip = ({ children, message }: TooltipProps) => {
  const tooltipRef = useRef<ElementRef<'div'>>(null);

  return (
    <div className="group relative inline-block">
      {children}
      <span className="absolute left-1/2 top-11 z-50 min-w-fit max-w-2xl -translate-x-1/2 scale-0 whitespace-pre-wrap rounded bg-gray-800 p-2 text-xs text-white transition-all group-hover:scale-100">
        {message}
      </span>
    </div>
  );
};

export default Tooltip;
