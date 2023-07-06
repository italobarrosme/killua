import { MarkTitle } from "@/components/MarkTitle"
import { ListCardTrips } from "../components/ListCardTrips"

export const RecommendedTrips = () => {
 const cardsTrips = [] as any


  return (
    <div className="w-full p-4">
      <MarkTitle label="Destinos Recomendados" />
      <ListCardTrips cardsTrips={cardsTrips} />
    </div>
  )
}