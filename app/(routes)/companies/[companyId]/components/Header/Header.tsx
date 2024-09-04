"use client";

import { ArrowLeft, RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  return (
    <div className="flex items-center text-xl mb-2">
      <ArrowLeft
        className="w-5 h-5 mr-2 cursor-pointer"
        onClick={() => router.push("/companies")}
      />
      Editar compañia
    </div>
  );
}
