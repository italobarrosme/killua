"use client"

import { Button } from "@/components/Button"
import { DatePickerInput } from "@/components/DatePickerInput"
import { TextInput } from "@/components/TextInput"
import { FormatCurrencyToBRL } from "@/utils/FormatCurrencyToBRL"
import { Controller, useForm } from "react-hook-form"	
import { ValidateRangeDatePricePerDay } from "../../domains"
import { useRouter } from "next/navigation"

type BookTripProps = {
  trip: any
}

type BookTripForm = {
  guests: number
  startDate: Date
  endDate: Date
}

export const BookTrip = ({
  trip,
}: BookTripProps) => {
  const { register, handleSubmit, formState: { errors },  control, watch, setError } = useForm<BookTripForm>()
  const router = useRouter()

  const onSubmit = async (data: BookTripForm) => {
    const response = await fetch('/api/trips/check', {
      method: 'POST',
      body: JSON.stringify(
        {
          startDate: data.startDate,
          endDate: data.endDate,
          tripId: trip.id,
        }
      )
    }).then(res => res.json())

    if (!response.success) {
      setError("startDate", {
        type: "manual",
        message: response.message
      })
      setError("endDate", {
        type: "manual",
        message: ''
      })
    } else {
      router.push(
        `/trips/${trip.id}/checkout?startDate=${data.startDate.toISOString()}&endDate=${data.endDate.toISOString()}&guests=${data.guests}&price=${price}`)
    }
  }

  const startDate = watch("startDate")
  const endDate = watch("endDate")

  const { price,priceFormated, days } = ValidateRangeDatePricePerDay(startDate, endDate, trip.pricePerDay)
  

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 py-2">
          <p className="text-xs">
            <span className="text-brand-secondary font-semibold">{FormatCurrencyToBRL(trip.pricePerDay)}</span> por noite
          </p>
          <div className="flex gap-4">
            <Controller
              name="startDate"
              rules={{
                  required: {
                    value: true,
                    message: `O campo Data inicial é obrigatório`,
                  },
                }
              }
              control={control}
              render={({ field }) => (
                <DatePickerInput placeholderText="Data de início" 
                onChange={(ev) => field.onChange(ev!!)}
                selected={field.value}
                minDate={trip.startDate}
                error={errors.startDate}
                errorMessage={errors.startDate?.message}  />
              )}
              
            />
            <Controller
              name="endDate"
              rules={{
                  required: {
                    value: true,
                    message: `O campo Data final é obrigatório`,
                  },
                }
              }
              control={control}
              render={({ field }) => (
                <DatePickerInput placeholderText="Data de final" 
                onChange={(ev) => field.onChange(ev!!)}
                selected={field.value} 
                maxDate={trip.endDate}
                minDate={startDate ?? trip.startDate}
                error={errors.endDate}
                errorMessage={errors.endDate?.message}  />
              )}
            />
          </div>
          <TextInput {...register("guests", {
            required: {
              value: true,
              message: `O campo Hóspedes é obrigatório`,
            },
            max: {
              value: trip?.maxGuests,
              message: `O número máximo de hóspedes é ${trip?.maxGuests}`,
            }
          })}
          type="number"
          placeholder="Hóspedes" 
          auxiliaryText={`Número máximo de Hóspedes: ${trip?.maxGuests}`}
          error={errors.guests}
          errorMessage={errors.guests?.message}
          />
          
          <div className="flex justify-between">
            <span className="text-sm">Total({days} {days > '1' ? 'noites' : 'noite'})</span>
            <span className="text-sm">
              
            {priceFormated}

            </span>
          </div>
          <Button onClick={() => handleSubmit(onSubmit)() }>Reservar agora</Button>
        </div>
      </div>
    </div>
  )
}