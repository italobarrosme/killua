"use client"
import { Title } from '@/components/Title';
import { Icon } from '@iconify/react';

type HighLight = string

type HighLightsProps = {
  highLights: HighLight[]
}

export const HighLights = ({highLights}:HighLightsProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Title label="Destaques" className='text-sm' />
      <ul className='flex flex-wrap gap-y-2'>
        {highLights.map((highLight) => (
          <li key={highLight} className="flex items-center gap-2 w-1/2">
            <Icon icon="simple-line-icons:check" className="text-brand-secondary text-xs" />
            <p className="text-xs">{highLight}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}