import { ListCardTrips } from "../../RecommendedTrips/components/ListCardTrips"
import { Title } from "@/components/Title"

type SearchListTripsProps = {
  cardsTrips: {
    id: string;
    name: string;
    location: string;
    startDate: Date;
    pricePerDay: number;
    coverImage: string;
    countryCode: string;
  }[]
}

export const SearchListTrips = ({cardsTrips}:SearchListTripsProps) => {
  return (
    <div className="w-full flex min-h-screen flex-col p-4 items-center">
      <Title label="Viagens Encontradas" />
      <small>
        {cardsTrips.length} viagens encontradas
      </small>
      <ListCardTrips cardsTrips={cardsTrips} />
    </div>
  )
}