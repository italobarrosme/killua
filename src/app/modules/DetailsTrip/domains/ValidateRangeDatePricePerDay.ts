import { FormatCurrencyToBRL } from "@/utils/FormatCurrencyToBRL"
import { differenceInDays } from "date-fns"

type ValidateRangeDatePricePerDayResponse = {
  days: string
  priceFormated: string
  price: string
}

export const ValidateRangeDatePricePerDay = (dateStart: Date, dateEnd: Date, pricePerDay: number): ValidateRangeDatePricePerDayResponse => {
  if (!dateStart || !dateEnd || !pricePerDay) {
    return {
      days: '0',
      priceFormated: FormatCurrencyToBRL(0),
      price: '0'
    }
  }  
  
  const days = differenceInDays(dateEnd, dateStart)
  const price = days * pricePerDay

    return {
      days: `${days}`,
      priceFormated: FormatCurrencyToBRL(price),
      price: `${price}`
    }
}