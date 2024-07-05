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
      companyId: params.companyId,
      userId,
    }
  });

  console.log(events);
  return (
    <div>
      <Calendar companies={companies} events={events} />
    </div>
  );
}
