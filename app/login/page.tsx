"use client";

import Link from "next/link"

import React from 'react'

export default function Login() {
  return (
    <div className="flex flex-col bg-black w-screen h-screen overflow-hidden ">
        <span className="text-white mt-12 mx-6 font-semibold text-2xl ">Log in To Comet.</span>
        
        <span className="flex mt-6 mx-6 text-gray-300 text-sm font-semibold ">Email</span>
        <input type="email" className="border-gray-800 text-gray-500 border-2 rounded-sm bg-transparent mx-6 my-2 h-[39px] focus:border-gray-600 text-semibold" id="mail" />

        <span className="flex mt-2 mx-6 text-gray-300 text-sm font-semibold ">Password</span>
        <input type="email" className="border-gray-800 text-gray-500 border-2 rounded-sm bg-transparent mx-6 my-2 h-[39px] focus:border-gray-600 text-semibold"/>
        
        <button className="text-sm text-center justify-center items-center bg-white rounded-sm my-3 mt-7 mx-6 font-bold text-gray-800 h-[48px]"><span className="my-6 ">Login</span></button>
        <span className=" text-sm mx-6 mt-2 text-green-500 font-bold">Register</span>

        <span className="text-semibold text-gray-600 text-sm fixed bottom-3 mx-6 my-4 text-center">Comet Uses Cookies To Ensure Good User Experience And Keeps You Logged In</span>

    </div>
  )
}
