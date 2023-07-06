export function FormatCurrencyToBRL(
  value: number,
  isMoneyFormattedAsIntValue = false
): string {
  if (!value) return ''
  if (isMoneyFormattedAsIntValue) {
    value = value / 100 // int 1000 = R$ 10,00
  }

  const parsedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

  return parsedValue
}