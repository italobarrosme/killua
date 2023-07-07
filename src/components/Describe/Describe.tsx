import { cn } from "@/utils/cn"

type DescribeProps = {
  title: string
  description: string
  className?: string
  smallDescription?: boolean
}

export const Describe = ({ title, description, className, smallDescription }: DescribeProps) => {
  return (
    <div className={cn('w-full flex flex-col gap-1', className)}>
      {
        smallDescription ? <h3 className="text-sm font-semibold">{title}</h3> : <h1 className="text-base font-semibold">{title}</h1>
      }
      <p className="text-xs">{description}</p>
    </div>

  )
}