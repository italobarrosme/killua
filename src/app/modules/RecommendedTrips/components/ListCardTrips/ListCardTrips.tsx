import { CardTrip as CardTripProps } from "../../types"
import { CardTrip } from "../CardTrip"

type ListCardTripsProps = {
  cardsTrips: CardTripProps[]
}


export const ListCardTrips = ({
  cardsTrips
}:ListCardTripsProps) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center my-4">
      {cardsTrips.map((cardTrip) => (
        <CardTrip key={cardTrip.id} {...cardTrip} />
      ))}
    </div>
  )
}