import classNames from 'classnames';

interface ISkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  roundedFull?: boolean;
}
const Skeleton = ({ className, roundedFull, ...props }: ISkeletonProps) => {
  return (
    <div
      className={classNames(
        'animate-pulse bg-slate-200 dark:bg-slate-700',
        roundedFull ? 'rounded-full' : 'rounded-md',
        className,
      )}
      {...props}
    />
  );
};

export default Skeleton;
