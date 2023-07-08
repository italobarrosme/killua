import Image from "next/image";

export type FooterProps = {
  logo: string;
  text: string;
}

export const Footer = ({logo, text}: FooterProps) => {



  return (
    <div className="w-full h-20 bg-brand-grays-300 p-4">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="relative w-[45px] h-[35px]">
        <Image src={logo} alt="logo" fill />
        </div>
        <p className="text-xs text-brand-dark">{text}</p>
      </div>
    </div>
  )
}