import * as React from 'react'

import localFont from "next/font/local";
import Link from 'next/link';
import logo from '@/public/logo.png';

const Helvetica = localFont({
  src: "../../app/fonts/Helvetica.ttf",

});  

interface Props {
  name: string;
  email: string;
}

// {children}: {children: React.ReactElement}

export default function Main({name, email}: Props) {
  return (
    <div className="w-screen h-screen">
        <h1 className={`${Helvetica.className} text-white font-semibold text-lg mt-5 ml-8`}>Dashboard</h1>
        <span className={`${Helvetica.className} mt-[1px] text-gray-600 font-normal text-[14px] ml-8`}>This week's Overview For {name} </span>
    </div>
  )
}
