import { Customicon } from "@/components/Customicon";
import { List } from "lucide-react";
import { TableIntegrations } from "../TableIntegrations";

export function ListItengrtions() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 flex-1">
      <div className="flex gap-x-2 items-center"> 
        <Customicon icon={List} />
        <p className="text-xl">List of Integrations</p>
      </div>
      <TableIntegrations />
    </div>
  );
}
