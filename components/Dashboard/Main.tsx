"use client";

import {useState, useEffect} from "react";
import { motion } from "framer-motion"

import { Apple, CirclePlus } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";

const Helvetica = localFont({
  src: "../../app/fonts/Helvetica.ttf",
});

interface Props {
  name: string;
  email: string;
}


export default function Main({ name, email }: Props) {

  
  // dummy data
  const calorieGoal = 3212;
  const calorieToday = 2721;

  const carbs = 20;
  const fats = 13;
  const protien = 9;


  return (
    <div className="w-screen h-screen mt-6 ">
      <motion.h1 initial={{x: 300,opacity: 0}} animate={{x: 0,opacity: 1}} transition={{ ease: "backInOut", duration: 1, x: { duration: 1 }}}
        className={`${Helvetica.className} text-white font-bold text-2xl ml-6`}
      >
        Today
      </motion.h1>

      <div className="flex flex-col mt-3 mx-6 rounded-lg bg-transparent md:hidden">
        <motion.span initial={{x: 300,opacity: 0}} animate={{x: 0,opacity: 1}} transition={{ ease: "backInOut", duration: 1, x: { duration: 1 }}} className="text-gray-600 text-sm font-semibold">
          Macro Breakdown
        </motion.span>
      </div>

      <motion.div initial={{x: 300,opacity: 0}} animate={{x: 0,opacity: 1}} transition={{ ease: "backInOut", duration: 1, x: { duration: 1 }
}} className="flex flex-col mb-5 mt-3 mx-6 rounded-lg bg-slate-950 md:hidden ">
        <div className="flex flex-inline justify-between items-center">
          <div className="flex flex-col mx-3 my-3">
            <span className="text-4xl font-bold">
              {" "}
              {calorieGoal - calorieToday}{" "}
            </span>
            <span className="text-md font-semibold text-gray-600">
              {" "}
              Remaining{" "}
            </span>
          </div>

          <div
            className="radial-progress my-4 mx-4"
            style={
              {
                "--value": (calorieToday / calorieGoal) * 100,
                "--size": "5.5rem",
                "--thickness": "9px",
              } as React.CSSProperties
            }
            role="progressbar"
          >
            <div className="flex flex-col mx-3 my-3 justify-center items-center">
              <Apple />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{x: 300,opacity: 0}} animate={{x: 0,opacity: 1}} transition={{ ease: "backInOut", duration: 1, x: { duration: 1 }}} className="flex justify-between mx-6 md:hidden rounded-lg bg-slate-950 overflow-auto">
        <div className="flex flex-col my-3 mx-3 justify-center items-center">
          <span className="text-white text-md my-2 font-semibold">Carbs</span>
          <div
            className="flex radial-progress text-orange-400"
            style={
              {
                "--value": (calorieToday / calorieGoal) * 100,
                "--size": "4rem",
                "--thickness": "6px",
              } as React.CSSProperties
            }
            role="progressbar"
          >
            <div className="flex flex-col  justify-center items-center">
              <span className="text-white text-md font-semibold">{carbs}g</span>
              <span className="text-gray-400 text-sm font-semibold">/150g</span>
            </div>
          </div>
        </div>

        <div className="flex flex-inline my-3 justify-center items-center">
          <div className="flex flex-col my-3 mx-3 justify-center items-center">
            <span className="text-white text-md my-2 font-semibold">Fats</span>
            <div
              className="flex radial-progress text-red-500"
              style={
                {
                  "--value": 43,
                  "--size": "4rem",
                  "--thickness": "6px",
                } as React.CSSProperties
              }
              role="progressbar"
            >
              <div className="flex flex-col  justify-center items-center">
                <span className="text-white text-md font-semibold">
                  {fats}g
                </span>
                <span className="text-gray-400 text-sm font-semibold">
                  /150g
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-inline my-3 justify-center items-center">
          <div className="flex flex-col my-3 mx-3 justify-center items-center ">
            <span className="text-white text-md my-2 font-semibold">
              Protien
            </span>
            <div
              className="flex radial-progress text-blue-500"
              style={
                {
                  "--value": 23,
                  "--size": "4rem",
                  "--thickness": "6px",
                } as React.CSSProperties
              }
              role="progressbar"
            >
              <div className="flex flex-col justify-center items-center">
                <span className="text-white text-md font-semibold">
                  {protien}g
                </span>
                <span className="text-gray-400 text-sm font-semibold">
                  /150g
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
