import { cn } from "@/lib/utils";
import rdImage from '@/app/assets/rd.png';
import Image from 'next/image';
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col", className)}>
      <Link href="/learn">
        <div className="flex items-center gap-3 pt-3">
          <Image 
            src={rdImage} 
            alt="Rapid Digits Logo" 
            width={40} 
            height={40} 
          />
          <span className="font-bold text-xl">Rapid Digits</span>
        </div>
      </Link>
      {/* Sidebar Items */}
      <div className="flex flex-col gap-y-2 flex-1 mt-2">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem label="Leaderboard" href="/leaderboard" iconSrc="/leaderboard.svg" />
        <SidebarItem label="Quest" href="/quest" iconSrc="/quests.svg" />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
      </div>

      <div className="pt-4 border-t border-slate-200">
        <SidebarItem 
          label="home" 
          href="/" 
          iconSrc="/home.svg"
        />
      </div>
    </div>
  );
};
