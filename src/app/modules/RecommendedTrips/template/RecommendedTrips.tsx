import { MarkTitle } from "@/components/MarkTitle"
import { ListCardTrips } from "../components/ListCardTrips"
import { GetRecommendedTrips } from "../services/"
import { useEffect, useState } from "react"
import { CardTrip } from "../types"

export const RecommendedTrips = () => {
 const [trips, setTrips] = useState<CardTrip[]>([])

 useEffect(() => {
  GetRecommendedTrips().then((response) => {
    const { trips } = response

    setTrips(trips)
  })
  }, [])

  return (
    <div className="w-full p-4">
      <MarkTitle label="Destinos Recomendados" />
      <ListCardTrips cardsTrips={trips} />
    </div>
  )
}