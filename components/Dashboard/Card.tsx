import * as React from "react";
import localFont from "next/font/local";

const Helvetica = localFont({
  src: "../../app/fonts/Helvetica.ttf",

}); 
interface Props {
    className?: string;
    children: React.ReactNode;
}

export default function Card({className, children} : Props) {
  return (
    <div className={`${Helvetica.className} bg-[#0f0f0f] rounded-xl h-[175px] ${className}`}>
        {children}
    </div>
  )
}
