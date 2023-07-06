"use client"

import { SearchTripsForm } from "@/modules/SearchTrips/template"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SearchTripsForm />
    </main>
  )
}
