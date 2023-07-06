import { ChangeEvent, useState } from 'react'

type useTextInputProps = string

export const useTextInput = (initialValue: useTextInputProps) => {
  const [value, setValue] = useState<string>(initialValue)

  const handlerChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target as HTMLInputElement
    setValue(value)
  }

  return {
    value,
    handlerChange
  }
}
