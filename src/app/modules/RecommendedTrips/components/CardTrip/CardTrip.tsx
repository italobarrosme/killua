import { CardTrip as CardTripProps } from "../../types"
import Image from "next/image"
import {FormatCurrencyToBRL } from "@/utils/FormatCurrencyToBRL"
import Link from "next/link"
import { ApresentationTrip } from "@/app/modules/DetailsTrip/components/ApresentationTrip"


export const CardTrip = ({ id,location, name, startDate, pricePerDay, coverImage, countryCode }: CardTripProps) => {
  return (
    <Link href={`/trips/${id}`}>
    <div className="w-80 flex flex-col gap-2 justify-center">
      <div className="w-[280px] h-[280px] mb-2 relative m-auto">
        {coverImage ? <Image src={coverImage} alt={name} fill objectFit="cover" className="rounded-2xl" /> : null}
      </div>
      <div className="w-[280px] m-auto">
      <ApresentationTrip nameTrip={name} locationTrip={location} countryCodeTrip={countryCode} />
        <p><span className="text-brand-secondary font-semibold">{FormatCurrencyToBRL(pricePerDay)}</span> por noite</p>
      </div>
    </div>
    </Link>

  )
}