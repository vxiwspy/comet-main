"use client";

import {motion} from "framer-motion"

import Link from "next/link"
import Image from "next/image"
import localFont from "next/font/local";

import illustration from "@/public/illustration_onboarding.png"

const Helvetica = localFont({
  src: "../fonts/Helvetica.ttf",
});

export default function onboarding() {

  return (
    <motion.div className="flex flex-col w-screen h-screen bg-black overflow-y-hidden overflow-x-hidden">
        <motion.div className="flex flex-col h-screen w-screen">
            <motion.span className={`my-8 mx-6 text-white ${Helvetica.className} text-3xl font-bold`}>
                Your Meals, <br /> Tracked, <br /> In One Place.
            </motion.span>
        </motion.div>
        <Image src={illustration} alt="illustration"width={500} height={500} className="flex justify-center items-center" />
        <motion.div className="flex flex-col justify-center items-center mb-[100px]">
            
            <Link href="/login" className="-mb-[80px]"><motion.button className="rounded-2xl justify-center items-center text-white bg-gray-800 h-[65px] w-[300px] font-bold text-lg hover:text-gray-800 hover:bg-white">Get Started</motion.button></Link>
        </motion.div>

    </motion.div>
  )
}
