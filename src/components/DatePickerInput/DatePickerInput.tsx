"use client"

import { InputHTMLAttributes, ChangeEvent } from 'react'
import { Icon } from '@iconify/react'
import { cn } from '@/utils/cn'
import DatePicker, {ReactDatePickerProps, registerLocale} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import ptBR from 'date-fns/locale/pt-BR';

type DatePickerInputProps = {
  error?: string;
  errorMessage?: string;
  label?: string;
  icon?: string;
} & InputHTMLAttributes<HTMLInputElement> & ReactDatePickerProps;

registerLocale("pt-BR", ptBR);

export const DatePickerInput = ({ 
  value,
  id, 
  label, 
  className, 
  error, 
  errorMessage,
  icon,
  placeholderText,
  ...props
 }: DatePickerInputProps) => {


  return (
    <div className="w-full max-w-xl">
      <label
        htmlFor={id}
        className="uppercase text-secondary-500 font-bold my-2 text-sm"
      >
        {label}
      </label>
      <div className={cn(error ? "border-red-500" : "focus:ring-1 focus:ring-brand-primary", 'flex gap-2 border items-center rounded-md h-9 w-full text-brand-dark bg-brand-grays-100')}>
        {icon ? <Icon icon={icon} /> : null}
        <DatePicker
          placeholderText={placeholderText}
          locale={'pt-BR'}
          wrapperClassName={'w-full'}
          className={cn('rounded-md focus:outline-none px-2 w-full placeholder-black placeholder-opacity-20', className)} 
          enableTabLoop={false}
          {...props}
        />
        {error && errorMessage && (
        <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
      )}
      </div>
    </div>
  )
}