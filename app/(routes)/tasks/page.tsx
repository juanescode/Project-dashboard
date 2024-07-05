import { auth } from "@clerk/nextjs";

import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Calendar } from "./components/Calendar";

export default async function Taskspage({params} : {params: {companyId: string}}) {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const companies = await db.company.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const events = await db.event.findMany({
    where: {
      id: params.companyId,
      // companyId: "0d689d67-2926-4dd0-bf05-e8d883492cfd"
    }
  });

  console.log(events);
  return (
    <div>
      <Calendar companies={companies} events={events} />
    </div>
  );
}
