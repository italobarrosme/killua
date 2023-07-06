import { DatePickerInput } from "@/components/DatePickerInput"
import { TextInput } from "@/components/TextInput"
import { Title } from "@/components/Title"
import { MoneyInput } from "@/components/MoneyInput"
import { Button } from "@/components/Button"

export const SearchTripsForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-search-background bg-cover bg-center bg-no-repeat">
      <Title label="Encontre sua próxima" highlight="viagem!" />
      <div className="flex flex-col gap-4 py-4">
        <TextInput placeholder="Onde você quer ir?" onChange={() => console.log('here')} />
        <div className="flex gap-4">
        <DatePickerInput placeholderText="Quando?" onChange={() => console.log('here')} />
        <MoneyInput placeholder="Orçamento?" onChange={() => console.log('here')} />
        </div>
      </div>
      <Button>Buscar</Button>
    </div>
  )
}