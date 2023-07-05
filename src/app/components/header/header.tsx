"use client"

import Image from "next/image";
import { ButtonAuth } from "../buttonAuth";
import { signIn, signOut, useSession } from 'next-auth/react'

type HeaderProps = {
  logo: string;
}

export const Header = ({logo}:HeaderProps) => {
  const { data } = useSession()
  const handlerAuth = () => {
    data ? signOut() : signIn()
  }

  return (
    <nav className="h-24 flex items-center justify-between px-4">
      <Image src={logo} alt="logo" width={183} height={32} />
      <ButtonAuth data={data} icon={'quill:hamburger'} onClick={
        handlerAuth
      } />
    </nav>
  )
  
}