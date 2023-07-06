import { Title } from "@/components/Title"
import { CardTrip as CardTripProps } from "../../types"
import Image from "next/image"
import {FormatCurrencyToBRL } from "@/utils/FormatCurrencyToBRL"
import {ReactCountryFlag} from "react-country-flag"
import Link from "next/link"


export const CardTrip = ({ id,location, name, startDate, pricePerDay, coverImage, countryCode }: CardTripProps) => {
  return (
    <Link href={`/trips/${id}`}>
    <div className="w-80 flex flex-col gap-2 justify-center">
      <div className="w-[280px] h-[280px] mb-2 relative m-auto">
        {coverImage ? <Image src={coverImage} alt={name} fill objectFit="cover" className="rounded-2xl" /> : null}
      </div>
      <div className="w-[280px] m-auto">
        <Title label={name} className="text-base" />
        <div className="text-xs flex flex-col gap-1">
          <p className="flex items-center gap-2">
            <span>
              <ReactCountryFlag countryCode={countryCode} style={{
                width: '16px',
                height: '16px',
              }} svg />
            </span>
            {location}
          </p>
          <p><span className="text-brand-secondary font-semibold">{FormatCurrencyToBRL(pricePerDay)}</span> por noite</p>
        </div>
      </div>
    </div>
    </Link>

  )
}