import { Title } from "@/components/Title"
import { CardTripBook } from "@/components/CardTripBook"
import { Button } from "@/components/Button"
import { toast } from "react-toastify";

type MyBookTrips = {
  id: string;
  tripId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  totalPaid: number;
  guests: number;
  trip: {
    id: string;
    name: string;
    location: string;
    locationDescription: string;
    startDate: Date;
    endDate: Date;
    pricePerDay: number;
    description: string;
    coverImage: string;
    imagesUrl: string[];
    highlights: string[];
    maxGuests: number;
    countryCode: string;
    recommended: boolean;
  };
};

type MyTripsProps = {
  trips: MyBookTrips[]
  refetch: () => void
}


export const MyTrips = ({trips, refetch}:MyTripsProps) => {
  const hanlderRemoveTrip = async (id: string) => {
    const response = await fetch(`/api/trips/checkout-book/${id}`, {
      method: 'DELETE',
    }).then(res => res.json())

    if (response.success) {
      toast.success(response.message, {
        position: "top-right",
      })
      refetch()

    } else {
      toast.error(response.message, {
        position: "top-right",
      })
    }
  }


  return (
    <main className="flex min-h-screen flex-col p-4">
      <Title label={'Minhas Viagens'} className="text-2xl mb-4" />
      <div className="flex flex-col gap-5">
        {trips.length > 0 ? trips.map((item) => (
          <CardTripBook key={item.id}
            coverImage={item.trip.coverImage}
            nameTrip={item.trip.name}
            locationTrip={item.trip.location}
            descriptionTrip={item.trip.description}
            countryCodeTrip={item.trip.countryCode}
            startDateTrip={item.startDate.toString()}
            endDateTrip={item.endDate.toString()}
            priceTrip={item.totalPaid.toString()}
            guestsTrip={item.guests.toString()}
          >
            <Button onClick={() => hanlderRemoveTrip(item.id)} variant="outline" className="border border-red-500 text-red-500"> Cancelar Viagem </Button>
          </CardTripBook>
        )): <div className="text-center">Você não possui nenhuma viagem</div>}
      </div>
    </main>
  )
}