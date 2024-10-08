"use client"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon, UserIcon } from "lucide-react"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export default function Resnav() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side={side}>

               
               <div className="justify-between">
                    <ul className="justify-center gap-5 text-lg mt-8 ">
                        <li><a href="#" className="hover:underline ">Home</a></li>
                        <li><a href="#" className="hover:underline ">Catalog</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                  
                </div>
                
                        <div className="bg-gray-200 mt-[220%] w-48 p-2 rounded-2xl ">
                            <UserIcon /> <h1>Log in</h1>
                        </div>
            
               
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
