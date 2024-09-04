import { Menu, Search } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ToggleTheme } from "@/components/ToggleTheme";

import { SidebarRoutes } from "../SidebarRoutes";

export function Navbar() {
  return (
    <nav className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex justify-between items-center w-full mr-2">
        <div className="ml-auto flex items-center">
            <div className="mr-2">
            <ToggleTheme />
            </div>
          <UserButton />
        </div>
      </div>
    </nav>
  );
} 
