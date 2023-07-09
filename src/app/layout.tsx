"use client"

import { NextAuthProvider } from '@/providers/auth'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { NavAuth } from '@/app/modules/Authentication/template'
import clsx from 'clsx'
import { Footer } from '@/components/Footer/'
import { ToastProvider } from '@/providers/toast'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "700"],
})

export const metadata = {
  title: 'Trips',
  description: 'Sistema de reserva de viagens',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(poppins.className, 'text-brand-dark text-sm')}>
        <NextAuthProvider>
          <ToastProvider>
          <NavAuth />
            {children}
          <Footer logo='/logo-orangescreen-center.png' text='Todos os direitos reservados' />
          </ToastProvider>
        </NextAuthProvider>
        </body>
    </html>
  )
}
