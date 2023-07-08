"use client"

import { Title } from "@/components/Title"
import { CardCheckoutBook } from "../components/CardCheckoutBook"
import { Button } from "@/components/Button"
import { useEffect,useState } from "react"

type CheckoutBookProps = {
    tripId: string
    price: string
    startDate: string
    endDate: string
    guests: string
}


export const CheckoutBook = ({
  tripId,
  price,
  startDate,
  endDate,
  guests,
}:CheckoutBookProps) => {
  const [checkoutTrip, setCheckoutTrip] = useState<any>(null)
  useEffect(() => {
    const fetchCheckoutTrip = async () => {
      const { trip } = await fetch('/api/trips/check', {
        method: 'POST',
        body: JSON.stringify(
          {
            startDate: startDate,
            endDate: endDate,
            tripId,
          }
        )
      }).then(res => res.json())

      setCheckoutTrip(trip)
      console.log(trip, 'TRIP')
    }
    

    fetchCheckoutTrip()
  }, [])

  if (!checkoutTrip) return null

  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="p-4">
        <Title label="Sua viagem" />
      </div>
      <div className="p-4">
        <CardCheckoutBook 
          coverImage={checkoutTrip.coverImage}
          nameTrip={checkoutTrip.name}
          locationTrip={checkoutTrip.location}
          countryCodeTrip={checkoutTrip.countryCode}
          descriptionTrip={checkoutTrip.description}
          startDateTrip={startDate}
          endDateTrip={endDate}
          priceTrip={price}
          guestsTrip={guests}
        />
      </div>
      <div className="w-full p-4">
        <Button >Finalizar Compra</Button>
      </div>
    </div>
  )
}