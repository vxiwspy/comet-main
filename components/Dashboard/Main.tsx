import * as React from "react";

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

// {children}: {children: React.ReactElement}

export default function Main({ name, email }: Props) {
  // dummy data
  const calorieGoal = 3212;
  const calorieToday = 2721;

  const carbs = 20;
  const fats = 13;
  const protien = 9;

  return (
    <div className="w-screen h-screen">
      <h1
        className={`${Helvetica.className} text-white font-bold text-5xl mt-7 ml-6`}
      >
        Dashboard
      </h1>
      <span
        className={`${Helvetica.className} mt-[1px] text-gray-600 font-normal text-[17px] ml-6`}
      >
        This week's Overview For {name}{" "}
      </span>

      {/* Mobile View */}

      {/* <Link
        href="/add"
        className="md:hidden flex flex-inline justify-between border-2 border-gray-300 mx-6 mt-12 mb-3 rounded-lg"
      >
        <CirclePlus color="#d0d5db" className="mx-2 my-2" size="26px" />
        <span className="text-gray-400 mx-3 my-auto text-md font-normal items-center">
          {" "}
          Add Food
        </span>
      </Link> */}

      <div className="flex flex-col my-5 mx-6 rounded-lg bg-transparent md:hidden border border-gray-600">
        <span className="text-gray-600 mx-2 my-2 text-sm font-semibold">
          Macro Breakdown
        </span>
      </div>

      <div className="flex flex-col my-5 mx-6 rounded-lg bg-[#151924] md:hidden">
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
      </div>

      <div className="flex justify-between mx-6 md:hidden rounded-lg bg-[#151924] overflow-auto">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
