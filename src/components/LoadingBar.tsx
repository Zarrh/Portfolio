const LoadingBar = ({ value }: { value: number }) => {
  return (
    <div className="rounded-lg bg-gray-400 h-4 w-full">
      <div 
        className="bg-primary h-full rounded-lg" 
        style={{ width: `${value * 100}%`}}
      />
    </div>
  );
};

export default LoadingBar;