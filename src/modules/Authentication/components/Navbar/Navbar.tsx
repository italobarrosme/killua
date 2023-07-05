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
    <nav className="h-24 flex items-center justify-between px-4 relative shadow-sm mb-4">
      <Image src={logo} alt="logo" width={183} height={32} />
      <ButtonAuth data={user} icon={isMenuOpen ? 'lucide:x' : 'quill:hamburger'} onClick={
        buttonAuthClick
      } />
     {
        isMenuOpen ? (
          <ul className="border absolute right-24 top-16 bg-brand-grays-100 shadow-xl rounded-md p-4 z-20">
          {menus.map((menu, index) => (
            <li key={index} className="text-xs text-brand-secondary font-semibold" onClick={menu.onClick}>
              {menu.name}
            </li>
          ))}
        </ul>
        ) : null
     }
    </nav>
  )
  
}