import { cn } from "@/utils/cn"

type TitleProps = {
  label: string
  highlight?: string
  className?: string
}

export const Title = ({label, highlight,className, ...props}: TitleProps) => {
    return (
        <>
          <h1 className={cn('text-xl font-semibold', className)}>{label} <span className="text-brand-secondary">{highlight}</span></h1>
        </>
    )
}