import classNames from 'classnames';

type Orientation = 'vertical' | 'horizontal';

interface ISeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation;
}

const Separator = ({
  className,
  orientation = 'horizontal',
}: ISeparatorProps) => {
  return (
    <div
      className={classNames(
        'shrink-0 bg-slate-200 dark:bg-slate-700',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[2px]',
        className,
      )}
    ></div>
  );
};

export default Separator;
