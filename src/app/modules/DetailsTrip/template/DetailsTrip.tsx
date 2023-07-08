import { Describe } from "@/components/Describe"
import { Division } from "@/components/Division"
import { prisma } from "@/lib/prisma/prisma"
import { HighLights } from "../components/HighLights"
import { BookTrip } from "../components/BookTrip"
import { LocationTrip } from "../components/LocationTrip"
import { GalleryTrip } from "../components/GalleryTrip"
import { ApresentationTrip } from "../components/ApresentationTrip"

type DetailsTripProps = {
  tripId: string
}

const getDetailsTrip = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId
    }
  })

  return trip
}

export const DetailsTrip = async ({tripId}: DetailsTripProps) => {  
  const trip = await getDetailsTrip(tripId)

  if (!trip) return null

  return (
    <div className="w-full flex min-h-screen flex-col">
      <GalleryTrip  coverImage={trip.coverImage} images={[]}/>
      <div className="w-full p-4 max-w-xl mx-auto">
        <div>
          <ApresentationTrip nameTrip={trip.name} locationTrip={trip.location} countryCodeTrip={trip.countryCode} />
        </div>
        <BookTrip trip={trip} />
        <Division />
        <Describe title={'Sobre a Viagem'} description={trip.description} className="my-8" />
        <HighLights highLights={trip.highlights} />
        <LocationTrip location={trip.location} locationDescription={
          trip.locationDescription
        } />
      </div>

    </div>
  )
}