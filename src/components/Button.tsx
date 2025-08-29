const Button = ({ href, children }: { href?: string, children?: React.ReactNode }) => {
  return (
    <a href={href || ""}>
      <button 
        className="
          px-4
          py-2 
          text-center 
          bg-primary/50
          max-w-[164px] 
          h-[52px]
          rounded-md
          ring-2
          ring-primary
          font-bold
          align-center
          items-center
          text-[16px]
          cursor-pointer
          hover:opacity-50
          transition ease-linear duration-200
        "
      >
        {children}
      </button>
    </a>
  );
};

export default Button;