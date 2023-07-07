import { Describe } from "@/components/Describe"
import { Division } from "@/components/Division"
import { prisma } from "@/lib/prisma/prisma"
import Image from "next/image"
import { HighLights } from "../components/HighLights"

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
    <div className="w-full">
      <div className="relative h-[300px] w-full">
        {trip ? <Image src={trip.coverImage} alt={trip.name} fill style={
          {
            objectFit: 'cover',
            objectPosition: 'center'
          }
        } /> : null}
      </div>
      <div className="w-full p-4">
        <Division />
        <Describe title={'Sobre a Viagem'} description={trip.description} className="my-8" />
        <HighLights highLights={trip.highlights} />
      </div>

    </div>
  )
}