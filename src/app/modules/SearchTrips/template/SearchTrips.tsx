"use client"

import { DatePickerInput } from "@/components/DatePickerInput"
import { TextInput } from "@/components/TextInput"
import { Title } from "@/components/Title"
import { MoneyInput } from "@/components/MoneyInput"
import { Button } from "@/components/Button"
import { QuickSearch } from "../components/QuickSearch"

import { CategorySearch } from "@/app/modules/SearchTrips/types"

export const SearchTripsForm = () => {
  const categories:CategorySearch[] = [
    {
      id: '1',
      label: 'Praia',
      icon: 'mdi:beach',
      value: 'beach',
      onClick: () => console.log('Praia')
    },
    {
      id: '2',
      label: 'Montanha',
      icon: 'mdi:mountain',
      value: 'mountain',
      onClick: () => console.log('Montanha')

    },
    {
      id: '3',
      label: 'Cidade',
      icon: 'mdi:city',
      value: 'city',
      onClick: () => console.log('Cidade')
    },
    {
      id: '4',
      label: 'Campo',
      icon: 'mdi:pine-tree',
      value: 'field',
      onClick: () => console.log('Campo')
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center bg-search-background bg-cover bg-center bg-no-repeat w-full p-4">
        <Title label="Encontre sua próxima" highlight="viagem!" />
        <div className="flex flex-col gap-4 py-4">
          <TextInput placeholder="Onde você quer ir?" onChange={() => console.log('here')} />
          <div className="flex gap-4">
          <DatePickerInput placeholderText="Quando?" onChange={() => console.log('here')} />
          <MoneyInput placeholder="Orçamento?" onChange={() => console.log('here')} />
          </div>
        <Button>Buscar</Button>
        </div>
      </div>

      <div className="w-full p-4">
        <QuickSearch categories={categories} />
      </div>
    </div>
  )
}