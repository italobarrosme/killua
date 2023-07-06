import { prisma } from "@/lib/prisma/prisma"

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

  return (
    <div>
      <h1>Detalhes da trip</h1>
    </div>
  )
}