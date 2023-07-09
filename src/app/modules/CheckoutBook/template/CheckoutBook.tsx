"use client"

import { Title } from "@/components/Title"
import { CardTripBook } from "../../../../components/CardTripBook"
import { Button } from "@/components/Button"
import { useEffect,useState } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

type CheckoutBookProps = {
    tripId: string
    price: string
    startDate: string
    endDate: string
    guests: string
    userId: string
}


export const CheckoutBook = ({
  tripId,
  price,
  startDate,
  endDate,
  guests,
  userId,
}:CheckoutBookProps) => {
  const [checkoutTrip, setCheckoutTrip] = useState<any>(null)
  const router = useRouter()

  const submitCheckoutTrip = async () => {
    const response = await fetch('/api/trips/checkout-book', {
      method: 'POST',
      body: JSON.stringify(
        {
          startDate: startDate,
          endDate: endDate,
          totalPrice: price,
          guests: Number(guests),
          userId,
          tripId,
        }
      )
    }).then(res => res.json())

    if (response.success) {
      toast.success(response.message, {
        position: "top-right",
      })
      router.push('/my-trips')
    } else {
      toast.error(response.message, {
        position: "top-right",
      })
    }
  }
  
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
        <CardTripBook 
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
        <Button onClick={submitCheckoutTrip}>Finalizar Compra</Button>
      </div>
    </div>
  )
}