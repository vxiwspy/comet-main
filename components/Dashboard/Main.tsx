import * as React from 'react'

import { Apple } from 'lucide-react';
import {CircularProgress} from "@nextui-org/progress";
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

  const calorieGoal = 3212
  const calorieToday = 2000

  return (
    <div className="w-full h-full">
        <h1 className={`${Helvetica.className} text-white font-bold text-5xl mt-7 ml-6`}>Dashboard</h1>
        <span className={`${Helvetica.className} mt-[1px] text-gray-600 font-normal text-[17px] ml-6`}>This week's Overview For {name} </span>

          {/* Mobile View */}
          <div className='flex flex-col my-5 mx-6 rounded-lg bg-[#15151a] md:hidden'>
            <div className='flex flex-inline justify-between items-center'>
              <div className='flex flex-col mx-3 my-3'>
                    <span className='text-4xl font-bold'> {calorieGoal - calorieToday} </span>
                    <span className='text-md font-semibold text-gray-600'> Remaining </span>
              </div>

              <div className="radial-progress my-4 mx-4" style={{ "--value": ((calorieToday / calorieGoal) * 100), "--size": "7rem", "--thickness": "10px" }  as React.CSSProperties } role="progressbar">
                <div className='flex flex-col mx-3 my-3 justify-center items-center'>
                <Apple />
              </div>
            </div>
          </div>
        </div>


      </div>
  )
}
