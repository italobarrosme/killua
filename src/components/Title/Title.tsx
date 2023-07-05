type TitleProps = {
  label: string
  highlight?: string
}

export const Title = ({label, highlight}: TitleProps) => {
    return (
        <>
          <h1 className="text-xl font-semibold">{label} <span className="text-brand-secondary">{highlight}</span></h1>
        </>
    )
}