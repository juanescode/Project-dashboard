"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarItem } from "../SidebarItem";
import { dataGeneralSidebar, datatToolsSidebar } from "./SidebarRoutes.data";

export function SidebarRoutes() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex-grow">
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
      </div>
    </div>
  );
}