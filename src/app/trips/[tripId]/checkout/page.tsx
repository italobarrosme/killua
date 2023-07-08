"use client"
import { CheckoutBook } from "@/app/modules/CheckoutBook/template"
import { useSearchParams } from "next/navigation"

type Params = {
  params: {
    tripId: string,
  }
}

const Checkout = ({ params }: Params) => {
  const searchParams = useSearchParams()
  const getQueryParam = (param: string) => searchParams.get(param) ?? '';

  const { tripId } = params;
  const startDate = getQueryParam('startDate');
  const endDate = getQueryParam('endDate');
  const guests = getQueryParam('guests');
  const price = getQueryParam('price');

  return (
    <CheckoutBook 
      tripId={tripId}
      startDate={startDate}
      endDate={endDate}
      guests={guests}
      price={price}
    />
  )
}

export default Checkout