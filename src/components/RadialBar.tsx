const RadialBar = ({ value, children }: { value?: number, children?: React.ReactNode }) => {
  return (
    <div className="relative size-40">
      <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-neutral-700" stroke-width="2"></circle>
        <circle cx="18" cy="18" r="16" fill="none" className={`stroke-current ${value ? "text-primary" : "text-neutral-700"}`} stroke-width="2" stroke-dasharray="100" stroke-dashoffset={`${value ? 100 - value * 100 : "100"}`} stroke-linecap="round"></circle>
      </svg>

      {children}
    </div>
  )
}

export default RadialBar;