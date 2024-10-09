import React from 'react';
import localFont from "next/font/local";
import Link from 'next/link';
import Image from 'next/image';

import { House , Search, Apple, Hash, User, Users } from 'lucide-react';
import logo from '@/public/logo.png';

const Helvetica = localFont({
  src: "../app/fonts/Helvetica.ttf",

});

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen w-[300px] text-gray-600 bg-transparent border-r-2 border-[#242a36]">

        {/* <div className="flex flex-inline mx-2 my-6 justfy-center items-center">
          
           <div className="">
          <Image src={logo} alt="logo" height={32} width={32} className="mx-3 my-[2px] rounded-md" />
               <h1 className={`text-white font-semibold text-[14px] ${Helvetica.className} mx-2 text-nowrap`}>Comet Dashboard</h1>
              <h1 className={`text-gray-400 font-semibold text-[12px] ${Helvetica.className} mx-2 text-nowrap`}>dash.comet-njs.com</h1>
          </div> 

        </div> */}

        <button className="rounded-lg mx-[2px] my-2 mt-5 text-start flex flex-inline items-center">
        <Image src={logo} alt="logo" height={45} width={35} className="ml-3 mr-[8px] my-[2px] rounded-md" />
        <span className={`${Helvetica.className} font-semibold text-md text-white mt-2`}>Comet</span>
        </button>

        <div className="mt-2">
          <span className={`${Helvetica.className} font-bold text-[13px] text-gray-600 mx-4`}>Analytics</span>

            <Link href="/dashboard" className='mx-3 flex flex-inline items-center rounded-lg hover:bg-[#303233] hover:text-black'>
                <House size={17} strokeWidth={2} color="#9CA3AF" className='mx-[4px] ml-3 my-[1px]'/>
                <span className={`text-[#9CA3AF] font-bold text-[15px] ${Helvetica.className} mx-[4px] my-2`}>Dashboard</span>
                
            </Link>

            <Link href="/meal-tracker" className='mx-3 flex flex-inline items-center rounded-lg hover:bg-[#303233] hover:text-black'>
                <Apple size={17} strokeWidth={2} color="#9CA3AF" className='mx-[4px] ml-3 my-[1px]'/>
                <span className={`text-[#9CA3AF] font-bold text-[15px] ${Helvetica.className} mx-[4px] my-2`}>Meals</span>
                
            </Link>

            <Link href="/scores" className='mx-3 flex flex-inline items-center rounded-lg hover:bg-[#303233] hover:text-black'>
                <Hash size={17} strokeWidth={2} color="#9CA3AF" className='mx-[4px] ml-3 my-[1px]'/>
                <span className={`text-[#9CA3AF] font-bold text-[15px] ${Helvetica.className} mx-[4px] my-2`}>Scores</span>
                
            </Link>
        </div>

        <div className="mt-2">
          <span className={`${Helvetica.className} font-bold text-[13px] text-gray-600 mx-4`}>Community</span>

            <Link href="/dashboard" className='mx-3 flex flex-inline items-center rounded-lg hover:bg-[#303233] hover:text-black'>
                <User size={17} strokeWidth={2} color="#9CA3AF" className='mx-[4px] ml-3 my-[1px]'/>
                <span className={`text-[#9CA3AF] font-bold text-[15px] ${Helvetica.className} mx-[4px] my-2`}>Profile</span>
                
            </Link>

            <Link href="/meal-tracker" className='mx-3 flex flex-inline items-center rounded-lg hover:bg-[#303233] hover:text-black'>
                <Users size={17} strokeWidth={2} color="#9CA3AF" className='mx-[4px] ml-3 my-[1px]'/>
                <span className={`text-[#9CA3AF] font-bold text-[15px] ${Helvetica.className} mx-[4px] my-2`}>Friends</span>
                
            </Link>
        </div>
    </div>
  )
}
