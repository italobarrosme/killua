import { Title } from "@/components/Title"
import { CardTrip as CardTripProps } from "../../types"
import Image from "next/image"


export const CardTrip = ({ location, name,starDate,pricePerDay,coverImage }: CardTripProps) => {
  return (
    <div className="w-80">
      <div>
      {coverImage ? <Image src={coverImage} alt="Picture of the author" fill /> : null}
      </div>
      <Title label={name} className="text-xs" />
      <div>
        <p>{location}</p>
        <p>{starDate}</p>
        <p><span className="text-brand-secondary">{pricePerDay}</span> por noite</p>
      </div>
    </div>

  )
}