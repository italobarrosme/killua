import { cn } from "@/utils/cn"

type DescribeProps = {
  title: string
  description: string
  className?: string
}

export const Describe = ({ title, description, className }: DescribeProps) => {
  return (
    <div className={cn('w-full flex flex-col gap-1', className)}>
      <h1 className="text-base font-semibold text-brand-dark">{title}</h1>
      <p className="text-xs">{description}</p>
    </div>

  )
}