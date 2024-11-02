import {Menu} from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";

import { Sidebar } from "@/components/Sidebar";

import React from 'react'

export const MobileSidebar = () => {
  return(
    <Sheet>
        <SheetTrigger>
            <Menu className="text-white"></Menu>
        </SheetTrigger>
        <SheetContent className="p-0 z-{100} bg-[#EBEEFF]"side="left">
            <Sidebar/>
        </SheetContent>
    </Sheet>
    
  )
}
