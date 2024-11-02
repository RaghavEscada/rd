"use client";

import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import brainImage from '@/app/assets/rd.png'; // Ensure this path is correct


const Home: React.FC = () => {
  return (
    <section>
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row justify-center items-center min-h-[400px] bg-[#EBEEFF] p-4 gap-2">
        <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[240px] mb-8 lg:mb-0 mr-9">
          {/* Brain Image (Static) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-32 bg-[#EBEEFF] flex items-center justify-center mt-4 ml-3">
            <Image
              src={brainImage}
              alt="Brain"
              className="w-20 h-24 sm:w-28 sm:h-32"
            />
          </div>

          {/* Rotating Container for Operators */}
          <div className="absolute left-1/2  top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 ">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
              const operator = ['+', '÷', '×', '-', '+', '÷', '×', '-'][index];
              return (
                <div
                  key={angle}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 text-xl sm:text-3xl font-bold"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-80px) rotate(-${angle}deg)`,
                    animation: `rotate-${angle} 11s linear infinite`
                  }}
                >
                  {operator}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center align-center mr-3 sm:mt-8">
          <div className="animate-typing flex justify-center font-bold transition-all align-center text-lg sm:text-xl mt-4">
           Calculations, Simplified!
          </div>
          
          <div className="flex justify-center align-center mt-6">
            <Button variant="secondary" className="px-4 py-2 text-sm sm:text-base">Get started</Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate-0 {
          from { transform: rotate(0deg) translateY(-80px) rotate(-0deg); }
          to { transform: rotate(360deg) translateY(-80px) rotate(-360deg); }
        }
        @keyframes rotate-45 {
          from { transform: rotate(45deg) translateY(-80px) rotate(-45deg); }
          to { transform: rotate(405deg) translateY(-80px) rotate(-405deg); }
        }
        @keyframes rotate-90 {
          from { transform: rotate(90deg) translateY(-80px) rotate(-90deg); }
          to { transform: rotate(450deg) translateY(-80px) rotate(-450deg); }
        }
        @keyframes rotate-135 {
          from { transform: rotate(135deg) translateY(-80px) rotate(-135deg); }
          to { transform: rotate(495deg) translateY(-80px) rotate(-495deg); }
        }
        @keyframes rotate-180 {
          from { transform: rotate(180deg) translateY(-80px) rotate(-180deg); }
          to { transform: rotate(540deg) translateY(-80px) rotate(-540deg); }
        }
        @keyframes rotate-225 {
          from { transform: rotate(225deg) translateY(-80px) rotate(-225deg); }
          to { transform: rotate(585deg) translateY(-80px) rotate(-585deg); }
        }
        @keyframes rotate-270 {
          from { transform: rotate(270deg) translateY(-80px) rotate(-270deg); }
          to { transform: rotate(630deg) translateY(-80px) rotate(-630deg); }
        }
        @keyframes rotate-315 {
          from { transform: rotate(315deg) translateY(-80px) rotate(-315deg); }
          to { transform: rotate(675deg) translateY(-80px) rotate(-675deg); }
        }
      `}</style>
    </section>
  );
};

export default Home;
