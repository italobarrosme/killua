"use client"

import { Button } from "@/components/Button"
import { DatePickerInput } from "@/components/DatePickerInput"
import { TextInput } from "@/components/TextInput"
import { FormatCurrencyToBRL } from "@/utils/FormatCurrencyToBRL"
import { useState } from "react"

type BookTripProps = {
  trip: any
}

export const BookTrip = ({
  trip,
}: BookTripProps) => {
  const [book, setBook] = useState({} as any)

  const handlerStartDate = (date: Date) => {
    setBook({
      ...book,
      startDate: date
    })
  }

  const handlerEndDate = (date: Date) => {
    setBook({
      ...book,
      endDate: date
    })
  }

  const handlerGuests = (guests: number) => {
    setBook({
      ...book,
      guests
    })
  }


  return (
    <div className="w-full p-4">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col gap-4 py-2">
          <p className="text-xs">
            <span className="text-brand-secondary font-semibold">{FormatCurrencyToBRL(trip?.pricePerDay)}</span> por noite
          </p>
          <div className="flex gap-4">
            <DatePickerInput placeholderText="Data de início" onChange={() => handlerStartDate} />
            <DatePickerInput placeholderText="Data final" onChange={() => handlerEndDate} />
          </div>
          <TextInput placeholder="Hóspedes" onChange={() => handlerGuests} auxiliaryText={`Número máximo de Hóspedes: ${trip?.maxGuests}`} />
          <div className="flex justify-between">
            <span className="text-sm">Total(7 noites)</span>
            <span className="text-sm">{FormatCurrencyToBRL(2660)}</span>
          </div>
          <Button>Reservar agora</Button>
        </div>
      </div>
    </div>
  )
}