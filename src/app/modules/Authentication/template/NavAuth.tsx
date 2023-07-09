"use client"

import { Navbar } from '@/components/Navbar'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const NavAuth = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const menus = [
    {
      name: 'Logout',
      icon: 'bx:bx-home',
      onClick: () => {
        signOut()
        setIsMenuOpen(false)
      }
    },
    {
      name: 'Minhas viagens',
      icon: 'bx:bx-home',
      onClick: () => {
        router.push('/my-trips')
        setIsMenuOpen(false)
      }
    }
  ]

 const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const { data } = useSession()
  const handlerAuth = () => {
    data ? toggleMenu() : signIn()
  }

  return (
    <Navbar logo={'/logo-default.png'}  menus={menus} user={data?.user} buttonAuthClick={handlerAuth} isMenuOpen={isMenuOpen} />
  )
}