type MarkTitleProps = {
  label: string
  highlight?: string
}

export const MarkTitle = ({label, highlight}: MarkTitleProps) => {
    return (
        <div className="w-full flex items-center gap-3 my-2">
          <div className="w-full h-[1px] bg-brand-grays-400"></div>
          <h1 className="text-base text-brand-grays-400 whitespace-nowrap">{label}</h1>
          <div className="w-full h-[1px] bg-brand-grays-400"></div>
        </div>
    )
} 