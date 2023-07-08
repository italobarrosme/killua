import { Title } from "@/components/Title"
import ReactCountryFlag from "react-country-flag"

type ApresentationTripProps = {
  nameTrip: string
  locationTrip: string
  countryCodeTrip: string
}

export const ApresentationTrip = ({
  nameTrip,
  locationTrip,
  countryCodeTrip }:ApresentationTripProps) => {
  return (
    <div className="w-full">
      <Title label={nameTrip} />
        <div className="text-xs flex flex-col gap-1">
          <p className="flex items-center gap-2">
            <span>
              <ReactCountryFlag countryCode={countryCodeTrip} style={{
                width: '16px',
                height: '16px',
              }} svg />
            </span>
            {locationTrip}
          </p>
        </div>
    </div>
  )
}