"use client"

import { RecommendedTrips } from "@/app/modules/RecommendedTrips/template"
import { SearchTripsForm } from "@/app/modules/SearchTrips/template"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <SearchTripsForm />
      <RecommendedTrips />
    </main>
  )
}
