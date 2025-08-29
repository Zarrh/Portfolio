const Gradient = (
  { width, height, x, y }: 
  { width: number, height: number, x: number, y: number }
) => {
  return (
    <div 
      style={{
        position: "absolute",
        width: `${width}vw`,
        height: `${height}vh`,
        left: `${x}vw`,
        top: `${y}vh`,
      }}
      className="
        bg-radial from-primary/70 from-1% to-bg/1 to-70% rounded-full
        -translate-x-1/2 -translate-y-1/2
      "
    />
  );
};

export default Gradient;