export const Stack = ({
  children,
  sx,
  className,
}: {
  children?: React.ReactNode;
  sx?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        ...sx,
      }}
    >
      {children}
    </div>
  );
};
