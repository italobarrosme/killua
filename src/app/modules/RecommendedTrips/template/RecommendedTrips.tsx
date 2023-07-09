import { MarkTitle } from "@/components/MarkTitle"
import { ListCardTrips } from "../components/ListCardTrips"
import { CardTrip } from "../types"
import { prisma } from "@/lib/prisma/prisma"

const getTrips = async () => {
  const trips = await prisma.trip.findMany()

  const cardsTrips = trips.map((trip:CardTrip) => {
    const cardTrip: CardTrip = {
      id: trip.id,
      name: trip.name,
      location: trip.location,
      pricePerDay: trip.pricePerDay,
      startDate: trip.startDate,
      coverImage: trip.coverImage,
      countryCode: trip.countryCode,
    }

    return cardTrip

  })  

  return {
    cardsTrips,
  }
}

export const RecommendedTrips = async () => {
 const {cardsTrips} = await getTrips()
 

  return (
    <div className="w-full p-4">
      <MarkTitle label="Destinos Recomendados" />
      <ListCardTrips cardsTrips={cardsTrips} />
    </div>
  )
}