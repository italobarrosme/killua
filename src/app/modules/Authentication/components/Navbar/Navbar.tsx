"use client"

import Image from "next/image";
import { ButtonAuth } from "../ButtonAuth";

type Menu = {
  name: string;
  icon?: string;
  href?: string;
  onClick?: () => void
}

type NavbarProps = {
  logo: string;
  user: any
  buttonAuthClick?: () => void
  menus: Menu[]
  isMenuOpen: boolean
}

export const Navbar = ({logo, user, buttonAuthClick, menus, isMenuOpen}:NavbarProps) => {

  return (
    <nav className="h-24 flex items-center justify-between px-4 relative">
      <Image src={logo} alt="logo" width={32} height={32} />
      <ButtonAuth data={user} icon={isMenuOpen ? 'lucide:x' : 'quill:hamburger'} onClick={
        buttonAuthClick
      } />
     {
        isMenuOpen ? (
          <ul className="absolute right-16 top-16 bg-brand-grays-200 shadow-md p-4 z-20">
          {menus.map((menu, index) => (
            <li key={index} className="text-xs" onClick={menu.onClick}>
              {menu.name}
            </li>
          ))}
        </ul>
        ) : null
     }
    </nav>
  )
  
}