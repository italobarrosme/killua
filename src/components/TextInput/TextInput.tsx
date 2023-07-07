"use client"

import { InputHTMLAttributes, ChangeEvent } from 'react'
import { Icon } from '@iconify/react'
import { cn } from '@/utils/cn'

export type TextInputProps = {
  label?: string
  icon?: string
  error?: string
  errorMessage?: string
  auxiliaryText?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
} & InputHTMLAttributes<HTMLInputElement>

export const TextInput = ({
  label,
  id,
  placeholder,
  icon = '',
  maxLength = 50,
  error,
  errorMessage,
  auxiliaryText,
  onChange,
  className,
  ...props
}: TextInputProps) => {
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
        <input
          onChange={(ev) => onChange(ev)}
          className={cn('rounded-md focus:outline-none px-2 w-full placeholder-black placeholder-opacity-20', className)}
          maxLength={maxLength}
          type="text"
          id={id}
          placeholder={placeholder}
          {...props}
        />
        
        
      </div>
      {error && errorMessage && (
        <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
        )}
      {auxiliaryText ? (
          <span className="mt-1 text-xs">{auxiliaryText}</span>
        ) : null}
    </div>
  )
}
