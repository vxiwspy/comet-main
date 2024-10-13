"use client";

import React, {useState} from 'react'
import {House, User, Apple, ChartNoAxesColumnIncreasing, CirclePlus} from 'lucide-react'
import Link from "next/link";

export default function Bottom() {

  const [current, setCurrent] = useState("Home");

  return (
    <div
    className="md:hidden flex flex-inline justify-between fixed z-50  bottom-0 w-screen bg-slate-950 rounded-t-xl">

      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center rounded-lg" onClick={() => setCurrent("Home")}>
        <House color={current === "Home" ? "#9f87ff" : "#4b5563"} className='flex' size={29} strokeWidth={2.5} />
        <span className={`${current === "Home" ? "text-[#9f87ff]" : "text-gray-600"} text-sm font-normal mx-2`}>Home</span>
      </Link>
      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center" onClick={() => setCurrent("History")} >
        <Apple color={current === "History" ? "#9f87ff" : "#4b5563"} className='flex' size={29} strokeWidth={2.5} />
        <span className={`${current === "History" ? "text-[#9f87ff]" : "text-gray-600"} text-sm font-normal mx-2`}>History</span>
      </Link>

      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center " onClick={() => setCurrent("Analytics")}>
        <ChartNoAxesColumnIncreasing color={current === "Analytics" ? "#9f87ff" : "#4b5563"} className='flex' size={29} strokeWidth={2.5} />
        <span className={`${current === "Analytics" ? "text-[#9f87ff]" : "text-gray-600"} text-sm font-normal mx-2`}>Analytics</span>
      </Link>

      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center" onClick={() => setCurrent("Profile")}>
        <User color={current === "Profile" ? "#9f87ff" : "#4b5563"} className='flex' size={29} strokeWidth={2.5} />
        <span className={`${current === "Profile" ? "text-[#9f87ff]" : "text-gray-600"} text-sm font-normal mx-2`}>Profile</span>
      </Link>

    </div>
  )
}
