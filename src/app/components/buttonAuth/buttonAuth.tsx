"use client"

import { Icon } from '@iconify/react'
import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx'

type ButtonAuthProps = {
  icon?: string;
  data: any;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonAuth = ({ icon = '', data, onClick}: ButtonAuthProps) => {
  return (
    <button onClick={onClick} className={clsx(data ? 'flex items-center gap-4 border rounded-3xl p-2' : 'font-bold' )}>
      {data ? (<>
        <Icon icon={icon} width={32}  />
        <Image src={data.user.image} alt="image user" width={32} height={32} className='rounded-full' />
      </>) : 'Login'}
    </button>
  )
}