"use client";

import { Button } from "@/components/ui/button";  // Ensure this is a client-side component

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full group hover:bg-[#EBEEFF]">
          <div className="flex items-center justify-center gap-2 text-xl font-semibold">
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-180 group-hover:translate-y-[-2px] text-3xl">
              +
            </span>
            <span className="transition-all duration-300 ease-in-out hover:text-shadow-pop hover:translate-y-[-2px]">
              Addition
            </span>
          </div>
        </Button>

        <Button size="lg" variant="ghost" className="w-full group hover:bg-[#EBEEFF]">
          <div className="flex items-center justify-center gap-2 text-xl font-semibold">
          <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-180 group-hover:translate-y-[-2px] text-3xl">
              -
            </span>
            <span className="transition-all duration-300 ease-in-out hover:text-shadow-pop hover:translate-y-[-2px]">
              Subtraction
            </span>
          </div>
        </Button>

        <Button size="lg" variant="ghost" className="w-full group hover:bg-[#EBEEFF]">
          <div className="flex items-center justify-center gap-2 text-xl font-semibold">
          <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-180 group-hover:translate-y-[-2px] text-xl">
              x
            </span>
            <span className="transition-all duration-300 ease-in-out hover:text-shadow-pop hover:translate-y-[-2px]">
              Multiplication
            </span>
          </div>
        </Button>

        <Button size="lg" variant="ghost" className="w-full group hover:bg-[#EBEEFF]">
          <div className="flex items-center justify-center gap-2 text-xl font-semibold">
          <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-180 group-hover:translate-y-[-2px] text-3xl">
            ÷
            </span>
            <span className="transition-all duration-300 ease-in-out hover:text-shadow-pop hover:translate-y-[-2px]">
              Division
            </span>
          </div>
        </Button>
      </div>
    </footer>
  );
};
