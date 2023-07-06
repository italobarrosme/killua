import { CardTrip as CardTripProps } from "../../types"
import { CardTrip } from "../CardTrip"

type ListCardTripsProps = {
  cardsTrips: CardTripProps[]
}


export const ListCardTrips = ({
  cardsTrips
}:ListCardTripsProps) => {


  return (
    <div className="flex flex-col">
      {cardsTrips.map((cardTrip) => (
        <CardTrip key={cardTrip.id} {...cardTrip} />
      ))}
    </div>
  )
}