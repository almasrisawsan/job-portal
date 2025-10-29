import clsx from "clsx";

const FullHeightCenter: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <div
    className={clsx(
      "h-[calc(100vh-72px)] flex justify-center items-center",
      className
    )}
  >
    {children}
  </div>
);

export default FullHeightCenter;
