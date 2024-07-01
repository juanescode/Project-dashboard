"use client"

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { SidebarItem } from "../SidebarItem";

import {
  dataGeneralSidebar,
  datSupportSidebar,
  datatToolsSidebar,
} from "./SidebarRoutes.data";

export function SidebarRoutes() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">General</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />

        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">TOOLS</p>
          {datatToolsSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />

        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">SUPPORT</p>
          {datSupportSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>

      <div className="text-center p-6">
        <Button variant="outline" className="w-full">
          Upgrade plan
        </Button>

        <Separator />

        <footer className="mt-3 p-3 text-center">
          2024. All rights reserved
        </footer>
      </div>
    </div>
  );
}
