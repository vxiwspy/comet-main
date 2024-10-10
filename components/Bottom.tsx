import React from 'react'
import {House, User, Apple, Hash} from 'lucide-react'
import Link from "next/link";
// #9f87ff
export default function Bottom() {
  return (
    <div
    className="md:hidden flex flex-inline justify-between">
      <Link href="/" className="">
        <House color="#fff" className='hover:fill-[#9f87ff]' size={16} strokeWidth={1.5} />
      </Link>
      <Link href="/" className="">
        <Apple color="#fff" className='hover:fill-[#9f87ff]' size={16} strokeWidth={1.5} />
      </Link>
      <Link href="/" className="">
        <Hash color="#fff" className='hover:fill-[#9f87ff]' size={16} strokeWidth={1.5} />
      </Link>
      <Link href="/" className="">
        <User color="#fff" className='hover:fill-[#9f87ff]' size={16} strokeWidth={1.5} />
      </Link>
    </div>
  )
}
