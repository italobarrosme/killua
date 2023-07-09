"use client"
import { CheckoutBook } from "@/app/modules/CheckoutBook/template"
import { useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react"
import { useRedirectUser } from "@/utils/hooks"

type Params = {
  params: {
    tripId: string,
  }
}

const Checkout = ({ params }: Params) => {
  const searchParams = useSearchParams()
  const getQueryParam = (param: string) => searchParams.get(param) ?? '';
  const { data: session, status } = useSession()
  const { tripId } = params;
  const startDate = getQueryParam('startDate');
  const endDate = getQueryParam('endDate');
  const guests = getQueryParam('guests');
  const price = getQueryParam('price');

  useRedirectUser({
    redirectUnauthorizedTo: `/`,
    status,
    session,
  })
    
  return (
    <CheckoutBook 
      tripId={tripId}
      startDate={startDate}
      endDate={endDate}
      guests={guests}
      price={price}
      userId={(session?.user as any)?.id!}
    />
  )
}

export default Checkout