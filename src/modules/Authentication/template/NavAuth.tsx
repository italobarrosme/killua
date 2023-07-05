"use client"

import { Navbar } from '@/modules/Authentication/components'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from 'react'

export const NavAuth = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menus = [
    {
      name: 'Logout',
      icon: 'bx:bx-home',
      onClick: () => {
        signOut()
        setIsMenuOpen(false)
      }
    },
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