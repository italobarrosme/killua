"use client"

import { SearchListTrips } from "../../modules/SearchTrips/template/SearchListTrips"
import { useSearchParams  } from "next/navigation"
import { useEffect, useState } from "react"

type GetTripsParams = {
  location: string
  startDate: string
  budget: string
}

const Trips = () => {
  const [trips, setTrips] = useState<any[]>([])
  const searchParams = useSearchParams()
  const getQueryParam = (param: string) => searchParams.get(param) ?? '';

  const fetchSearchTrips = async ({ location, startDate, budget }: GetTripsParams) => {
    const {trips} = await fetch(`/api/trips/search?location=${location}&startDate=${startDate}&budget=${budget}`)
    .then(res => res.json())

    setTrips(trips)
  }

  useEffect(() => {
    const location = getQueryParam('location')
    const startDate = getQueryParam('startDate')
    const budget = getQueryParam('budget')

    fetchSearchTrips({ location, startDate, budget })
  }, [])

  if (!trips) return null



  return (
    <SearchListTrips cardsTrips={trips} />
  )
}



export default Trips