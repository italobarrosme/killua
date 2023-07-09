import { ApresentationTrip } from "@/app/modules/DetailsTrip/components/ApresentationTrip"
import { Division } from "@/components/Division"
import { Title } from "@/components/Title"
import { FormatCurrencyToBRL } from "@/utils/FormatCurrencyToBRL"
import Image from "next/image"
import {format} from 'date-fns'

type CardCheckoutBookProps = {
  coverImage: string
  nameTrip: string
  locationTrip: string
  descriptionTrip: string
  countryCodeTrip: string
  startDateTrip: string
  endDateTrip: string
  priceTrip: string
  guestsTrip: string
}


export const CardCheckoutBook = ({
  coverImage,
  nameTrip,
  locationTrip,
  descriptionTrip,
  countryCodeTrip,
  startDateTrip,
  endDateTrip,
  priceTrip,
  guestsTrip
}:CardCheckoutBookProps) => {
  const formattedStartDate = format(new Date(startDateTrip), 'dd/MM/yyyy');
  const formattedEndDate = format(new Date(endDateTrip), 'dd/MM/yyyy');

  return (
    <div className="w-full rounded-xl shadow-xl p-4 border-2">
      <div className="flex gap-5 justify-between items-center">
        <div className="relative rounded-xl w-80 h-40">
          {coverImage ?  <Image src={coverImage} layout="fill" objectFit="cover" alt={nameTrip} className="rounded-xl" /> : null}
        </div>
        <div className="w-full">
          <ApresentationTrip nameTrip={nameTrip} locationTrip={locationTrip} countryCodeTrip={countryCodeTrip} />
        </div>
      </div>
      <Division />
      <Title label={'Detalhes'} className="text-base mb-4" />
      <p className="text-sm">
        <span>Data:</span> {formattedStartDate} - {formattedEndDate}
      </p>
      <p className="text-sm">
        <span>Hóspedes:</span> {guestsTrip}
      </p>
      <div className="flex justify-between mt-4">
        <span>Total</span>
        <span className="font-bold">{FormatCurrencyToBRL(+priceTrip)}</span>
      </div>
    </div>
  )
}