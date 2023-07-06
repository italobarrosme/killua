"use client"

import { RecommendedTrips } from "@/modules/RecommendedTrips/template"
import { SearchTripsForm } from "@/modules/SearchTrips/template"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <SearchTripsForm />
      <RecommendedTrips />
    </main>
  )
}
