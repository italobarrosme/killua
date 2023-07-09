"use client"

import Image from "next/image";
import { ButtonAuth } from "../../app/modules/Authentication/components/ButtonAuth";
import Link from "next/link";

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
    <nav className="h-20 flex items-center justify-between px-4 relative shadow-sm">
      <Link href="/">
        <Image src={logo} alt="logo" width={183} height={32} />
      </Link>
      <ButtonAuth data={user} icon={isMenuOpen ? 'lucide:x' : 'quill:hamburger'} onClick={
        buttonAuthClick
      } />
     {
        isMenuOpen ? (
          <ul className="border absolute right-24 top-16 bg-brand-grays-100 shadow-xl rounded-md p-2 z-20">
          {menus.map((menu, index) => (
            <li key={index} className="p-0 my-4 cursor-pointer text-xs text-brand-secondary font-semibold hover:bg-brand-primary hover:text-white px-2" onClick={menu.onClick}>
              {menu.name}
            </li>
          ))}
        </ul>
        ) : null
     }
    </nav>
  )
  
}