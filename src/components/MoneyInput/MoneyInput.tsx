"use client"

import { InputHTMLAttributes, Ref, forwardRef } from 'react'
import { Icon } from '@iconify/react'
import { cn } from '@/utils/cn'
import CurrencyInput, { CurrencyInputProps } from "react-currency-input-field";


type MoneyInputProps = {
  label?: string
  icon?: string
  error?: any
  errorMessage?: string
} & InputHTMLAttributes<HTMLInputElement> & CurrencyInputProps

const MoneyInputImplement = ({ id, 
  error, 
  errorMessage, 
  icon, 
  placeholder, 
  label,
  value, 
  className, 
  ...props }:MoneyInputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="uppercase text-secondary-500 font-bold my-2 text-sm"
      >
        {label}
      </label>
      <div className={cn('flex gap-2 border items-center rounded-md h-9 w-full text-brand-dark bg-brand-grays-100')}>
      {icon ? <Icon icon={icon} /> : null}
        <CurrencyInput
          id={id}
          lang="pt-BR"
          className={cn('rounded-md focus:outline-none px-2 w-full placeholder-black placeholder-opacity-20', className)}
          placeholder={placeholder}
          intlConfig={{ locale: "pt-BR", currency: "BRL" }}
          {...props}
        />
        {error && errorMessage && (
        <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
      )}
      </div>
    </div>
  )
}

export const MoneyInput = forwardRef(MoneyInputImplement)