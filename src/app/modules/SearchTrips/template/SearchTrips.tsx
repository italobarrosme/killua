"use client"

import { DatePickerInput } from "@/components/DatePickerInput"
import { TextInput } from "@/components/TextInput"
import { Title } from "@/components/Title"
import { MoneyInput } from "@/components/MoneyInput"
import { Button } from "@/components/Button"
import { QuickSearch } from "../components/QuickSearch"
import { useRouter } from "next/navigation"

import { CategorySearch } from "@/app/modules/SearchTrips/types"
import { Controller, useForm } from "react-hook-form"

type SearchTripsForm = {
  location: string
  startDate?: Date
  budget?: string
}

export const SearchTripsForm = () => {
  const {register, handleSubmit, formState: { errors },  control, watch, setError } = useForm<SearchTripsForm>()
  const router = useRouter()

  const onSubmit = async (data: SearchTripsForm) => {
    const searchParams = new URLSearchParams();
  
    if (data.location) {
      searchParams.append('location', data.location);
    }
    if (data.startDate) {
      searchParams.append('startDate', data.startDate.toISOString());
    }
    if (data.budget) {
      searchParams.append('budget', data.budget);
    }
  
    const queryString = searchParams.toString();
    const url = `/trips/search?${queryString}`;
  
    router.push(url);
  };


  const categories:CategorySearch[] = [
    {
      id: '1',
      label: 'Praia',
      icon: 'mdi:beach',
      value: 'praia',
      onClick: () => router.push('/trips/search?location=praia')
    },
    {
      id: '2',
      label: 'Montanha',
      icon: 'mdi:mountain',
      value: 'montanha',
      onClick: () => router.push('/trips/search?location=montanha')

    },
    {
      id: '3',
      label: 'Cidade',
      icon: 'mdi:city',
      value: 'cidade',
      onClick: () => router.push('/trips/search?location=cidade')
    },
    {
      id: '4',
      label: 'Campo',
      icon: 'mdi:pine-tree',
      value: 'campo',
      onClick: () => router.push('/trips/search?location=campo')
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center bg-search-background bg-cover bg-center bg-no-repeat w-full p-4">
        <Title label="Encontre sua próxima" highlight="viagem!" />
        <div className="flex flex-col gap-4 py-4">
          <TextInput {...register("location", {
              required: {
                value: true,
                message: `O campo Localização é obrigatório`,
              },
            })}
            placeholder="Para onde você quer ir?" 
            error={errors.location}
            errorMessage={errors.location?.message}
            />
          <div className="flex gap-4">
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DatePickerInput placeholderText="Data de final" 
                onChange={(ev) => field.onChange(ev!!)}
                selected={field.value} 
                minDate={new Date()}
                error={errors.startDate}
               />
              )}
            />
            <Controller
              name="budget"
              control={control}
              render={({ field }) => (
                <MoneyInput placeholder="Orçamento?"
                onValueChange={(ev) => field.onChange(ev!!)}
                value={field.value}
                error={errors.budget}
                />
              )}
            />
          </div>
        <Button onClick={() => handleSubmit(onSubmit)()}>Buscar</Button>
        </div>
      </div>

      <div className="w-full p-4">
        <QuickSearch categories={categories} />
      </div>
    </div>
  )
}