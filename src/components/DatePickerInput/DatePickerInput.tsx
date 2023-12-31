"use client"

import { InputHTMLAttributes, ChangeEvent } from 'react'
import { Icon } from '@iconify/react'
import { cn } from '@/utils/cn'
import DatePicker, {ReactDatePickerProps, registerLocale} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import ptBR from 'date-fns/locale/pt-BR';

type DatePickerInputProps = {
  error?: any;
  errorMessage?: string;
  label?: string;
  icon?: string;
} & ReactDatePickerProps & InputHTMLAttributes<HTMLInputElement>;

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
  onChange,
  ...props
 }: DatePickerInputProps) => {


  return (
    <div className="w-full">
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
          dateFormat={'dd/MM/yyyy'}
          onChange={onChange}
          locale={'pt-BR'}
          className={cn('rounded-md focus:outline-none px-2 w-full placeholder-black placeholder-opacity-20', className)} 
          enableTabLoop={false}
          {...props}
        />
        
      </div>
      {error ? (
          <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
        ): null}
    </div>
  )
}