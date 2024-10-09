import React from 'react'
import localFont from "next/font/local";
import Sidebar from '@/components/Sidebar';
import Navbar from "@/components/Navbar";
import Main from "@/components/Dashboard/Main";


const Helvetica = localFont({
  src: "./fonts/Helvetica-Bold.ttf",

});

export default function Dashboard() {
  return (
    <div className="flex h-screen w-screen bg-[#090909] text-white">
      <Sidebar />
      <Main name="Bharnav" email="user@gmail.com" />
    </div>
  )
}