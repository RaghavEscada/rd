"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = ({
  label,
  iconSrc,
  href,
}: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className={`
        justify-start 
        h-[52px] 
        transition-all 
        duration-300 
        ease-in-out 
        hover:scale-105 
        hover:-translate-y-[2px] 
        hover:shadow-md
        group
        ${active ? 'hover:shadow-slate-300' : 'hover:shadow-grey-200'}
      `}
      asChild
    >
      <Link href={href} className="flex items-center">
        <div className="relative transition-transform duration-300 group-hover:scale-110">
          <Image
            src={iconSrc}
            alt={label}
            className="mr-5 transition-all duration-300 group-hover:brightness-110"
            height={32}
            width={32}
          />
        </div>
        <span className="capitalize transition-all duration-300 group-hover:font-semibold">
          {label}
        </span>
      </Link>
    </Button>
  );
};