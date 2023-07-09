"use client"

import { Title } from "@/components/Title"
import { CardTripBook } from "../../../../components/CardTripBook"
import { Button } from "@/components/Button"
import { useEffect,useState } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"

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
    const response = await fetch('/api/payment', {
      method: 'POST',
      body: JSON.stringify(
        {
          name: checkoutTrip.name,
          coverImage: checkoutTrip.coverImage,
          tripId: checkoutTrip.id,
          startDate,
          endDate,
          guests,
          totalPrice: price,
        }
      )
    }).then(res => res.json())

    if (response.success) {
      toast.success(response.message, {
        position: "top-right",
      })
      
      if (response.sessionId) {
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string)
        await stripe?.redirectToCheckout({ sessionId: response.sessionId })
      }


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