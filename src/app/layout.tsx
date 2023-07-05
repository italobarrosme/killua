import { NextAuthProvider } from '@/providers/auth'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { NavAuth } from '@/app/modules/Authentication/template'

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
      <body className={poppins.className}>
        <NextAuthProvider>
          <NavAuth />
          {children}
        </NextAuthProvider>
        </body>
    </html>
  )
}
