import { Button } from "@/components/Button"
import { Describe } from "@/components/Describe"
import { Title } from "@/components/Title"
import Image from "next/image"

type LocationTripProps = {
  location: string
  imageLocation?: string
  locationDescription: string
}

export const LocationTrip = ({ location, imageLocation,locationDescription }: LocationTripProps) => {


  return (
    <div className="w-full flex flex-col gap-4 my-8">
      <Title label="Localização" className='text-base' />
      {imageLocation ?<div className="w-80 relative">
        <Image src={''} alt="location" layout="fill" />
      </div> : null}
      <Describe title={location}  smallDescription
      description={locationDescription} className="mb-8" />
      <Button variant="outline">Ver no Google Maps</Button>
    </div>
  )
}