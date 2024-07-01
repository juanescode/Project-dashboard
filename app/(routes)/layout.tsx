import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default function layoutDashboard({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className="flex w-full h-full">
      <div className="hidden xl:block w-50 h-full xl-fixed">
        <Sidebar />
      </div>
      <div className="w-full xl:ml-50">
        <Navbar />
        <div className="p-6 bg-[#fafbfc] dark:bg-secondary">
            {children}
        </div>
      </div>
    </div>
  );
}
