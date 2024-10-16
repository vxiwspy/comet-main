"use client";

import {motion} from "framer-motion"
import React, {useState} from 'react'
import {House, User, Apple, ChartNoAxesColumnIncreasing, Search} from 'lucide-react'
import Link from "next/link";

export default function Bottom() {

  const [current, setCurrent] = useState("Home");

  return (
    <motion.div initial={{y: 300,opacity: 0}} animate={{y: 0,opacity: 1}} transition={{ ease: "easeIn", duration: 1.5, x: { duration: 1.5 }}}
    className="md:hidden flex flex-inline justify-between fixed z-50  bottom-0 w-screen bg-slate-950 rounded-t-xl">

      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center rounded-lg" onClick={() => setCurrent("Home")}>
        <House color={current === "Home" ? "#9f87ff" : "#4b5563"} className='flex' size={29} strokeWidth={2.5} />
        <span className={`${current === "Home" ? "text-[#9f87ff]" : "text-gray-600"} text-sm font-normal mx-2`}>Home</span>
      </Link>
      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center" onClick={() => setCurrent("History")} >
        <Apple color={current === "History" ? "#9f87ff" : "#4b5563"} className='flex' size={29} strokeWidth={2.5} />
        <span className={`${current === "History" ? "text-[#9f87ff]" : "text-gray-600"} text-sm font-normal mx-2`}>History</span>
      </Link>

      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center rounded-lg" onClick={() => setCurrent("Search")}>
        <Search color={current === "Search" ? "#9f87ff" : "#4b5563"} className='flex' size={29} strokeWidth={2.5} />
        <span className={`${current === "Search" ? "text-[#9f87ff]" : "text-gray-600"} text-sm font-normal mx-2`}>Search</span>
      </Link>

      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center " onClick={() => setCurrent("Analytics")}>
        <ChartNoAxesColumnIncreasing color={current === "Analytics" ? "#9f87ff" : "#4b5563"} className='flex' size={29} strokeWidth={2.5} />
        <span className={`${current === "Analytics" ? "text-[#9f87ff]" : "text-gray-600"} text-sm font-normal mx-2`}>Analytics</span>
      </Link>

      <Link href="/" className="mx-auto my-5 flex-col flex justify-center items-center" onClick={() => setCurrent("Profile")}>
        <User color={current === "Profile" ? "#9f87ff" : "#4b5563"} className='flex' size={29} strokeWidth={2.5} />
        <span className={`${current === "Profile" ? "text-[#9f87ff]" : "text-gray-600"} text-sm font-normal mx-2`}>Profile</span>
      </Link>

    </motion.div>
  )
}
