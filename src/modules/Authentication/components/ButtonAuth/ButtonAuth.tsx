"use client"

import { Icon } from '@iconify/react'
import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx'

type ButtonAuthProps = {
  icon?: string;
  data: any;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonAuth = ({ icon = '', data, onClick,className, ...props}: ButtonAuthProps) => {
  return (
    <button onClick={onClick} className={clsx('appearance-none', data ? 'flex items-center gap-4 border rounded-3xl p-2' : 'font-bold text-brand-secondary p-2' )} {...props}>
      {data ? (<>
        <Icon icon={icon} width={32}  />
        <Image src={data.image} alt="image user" width={32} height={32} className='rounded-full' />
      </>) : 'Login'}
    </button>
  )
}