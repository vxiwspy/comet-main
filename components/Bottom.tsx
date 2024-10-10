"use client";

import React, {useState} from 'react'
import {House, User, Apple, Hash} from 'lucide-react'
import Link from "next/link";

export default function Bottom() {

  const [current, setCurrent] = useState("Home");

  return (
    <div
    className="md:hidden flex flex-inline justify-between fixed z-50  bottom-0 w-screen bg-[#151517] rounded-t-xl">
      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center rounded-lg" onClick={() => setCurrent("Home")}>
        <House color={current === "Home" ? "#9f87ff" : "#4b5563"} className='flex' size={29} strokeWidth={2.5} />
        <span className={`${current === "Home" ? "text-[#9f87ff]" : "text-gray-600"} text-sm font-normal mx-2`}>Home</span>
      </Link>
      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center" onClick={() => setCurrent("Meals")} >
        <Apple color={current === "Meals" ? "#9f87ff" : "#4b5563"} className='flex' size={29} strokeWidth={2.5} />
        <span className={`${current === "Meals" ? "text-[#9f87ff]" : "text-gray-600"} text-sm font-normal mx-2`}>Meals</span>
      </Link>
      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center" onClick={() => setCurrent("Scores")}>
        <Hash color={current === "Scores" ? "#9f87ff" : "#4b5563"} className='flex' size={29} strokeWidth={2.5} />
        <span className={`${current === "Scores" ? "text-[#9f87ff]" : "text-gray-600"} text-sm font-normal mx-2`}>Scores</span>
      </Link>
      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center" onClick={() => setCurrent("Profile")}>
        <User color={current === "Profile" ? "#9f87ff" : "#4b5563"} className='flex' size={29} strokeWidth={2.5} />
        <span className={`${current === "Profile" ? "text-[#9f87ff]" : "text-gray-600"} text-sm font-normal mx-2`}>Profile</span>
      </Link>
    </div>
  )
}
