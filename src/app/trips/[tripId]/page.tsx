import { DetailsTrip } from "@/app/modules/DetailsTrip/template"

type TripParams = {
  params: {
    tripId: string
  }
}

const Trip = ({params}:TripParams) => {
  return (
    <DetailsTrip tripId={params.tripId} />
  )
}

export default Trip