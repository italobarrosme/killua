"use client"

import { useRedirectUser } from "@/utils/hooks"
import { useSession } from "next-auth/react"
import { MyTrips } from "../modules/MyTrips/template/MyTrips"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export default function MyTripsList() {
  const { data: session, status } = useSession()
  const [tripReservations, setTripReservations] = useState<any>([])
  useRedirectUser({
    redirectUnauthorizedTo: `/`,
    status,
    session,
  })

  const fetchTripReservations = async () => {
    const userId = (session?.user as any)?.id
    const { tripReservations, success } = await fetch(`/api/user/${userId}/trips`, {
      method: 'GET',
    }).then(res => res.json())

    setTripReservations(tripReservations)
    if (!success) {
      toast.error('Erro ao carregar suas viagens', {
        position: "top-right",
      })
  }
  
}
  
  useEffect(() => {
    
    if (session) {
      fetchTripReservations()
    }
  }, [status, session])
  

  return (
    <main className="flex min-h-screen flex-col">
      <MyTrips trips={tripReservations} refetch={fetchTripReservations} />
    </main>
  )
}
