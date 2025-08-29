const GradientBorder = (
  { border=2, rounded=true, children }:
  { border?: number, rounded?: boolean, children?: React.ReactNode }
) => {
  return (
    <div 
      className={`
        ${rounded && "rounded-lg"} 
        bg-linear-65 from-primary/50 to-primary
      `}
      style={{
        padding: border,
      }}
    >
      {children}
    </div>
  );
};

export default GradientBorder;