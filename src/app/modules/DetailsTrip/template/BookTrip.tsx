"use client"

import { Button } from "@/components/Button"
import { DatePickerInput } from "@/components/DatePickerInput"
import { TextInput } from "@/components/TextInput"
import { FormatCurrencyToBRL } from "@/utils/FormatCurrencyToBRL"

export const BookTrip = () => {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col gap-4 py-4">
          <div className="flex gap-4">
            <DatePickerInput placeholderText="Data de início" onChange={() => console.log('here')} />
            <DatePickerInput placeholderText="Data final" onChange={() => console.log('here')} />
          </div>
          <TextInput placeholder="Hóspedes" onChange={() => console.log('here')} />
          <div className="flex justify-between">
            <span className="text-sm">Total(7 noites)</span>
            <span className="text-sm">{FormatCurrencyToBRL(2.660)}</span>
          </div>
          <Button>Reservar agora</Button>
        </div>
      </div>
    </div>
  )
}