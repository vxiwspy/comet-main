import React from 'react'
import {House, User, Apple, Hash} from 'lucide-react'
import Link from "next/link";


export default function Bottom() {

  return (
    <div
    className="md:hidden flex flex-inline justify-between fixed bottom-0 w-screen bg-[#151517] rounded-t-xl ">
      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center">
        <House color="#4b5563" className='flex' size={29} strokeWidth={2.5} />
        <span className="text-gray-600 text-sm font-normal mx-2">Home</span>
      </Link>
      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center">
        <Apple color="#4b5563" className='flex' size={29} strokeWidth={2.5} />
        <span className="text-gray-600 text-sm font-normal mx-2">Meals</span>
      </Link>
      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center">
        <Hash color="#4b5563" className='flex' size={29} strokeWidth={2.5} />
        <span className="text-gray-600 text-sm font-normal mx-2">Scores</span>
      </Link>
      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center">
        <User color="#4b5563" className='flex' size={29} strokeWidth={2.5} />
        <span className="text-gray-600 text-sm font-normal mx-2 ">Profile</span>
      </Link>
    </div>
  )
}
