import { db } from "@/lib/db";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Calendar, Contact, Package, Pencil } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ContactModal from "@/components/PagDashboard/PagDashboard";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

type Contact = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
};

type Company = {
  id: string;
  name: string;
  description: string | null;
  profileImage: string;
  phone: string;
  country: string;
  website: string;
  contacts: Contact[];
};

export default async function Home() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const companies: Company[] = await db.company.findMany({
    where: {
      userId,
    },
    include: {
      contacts: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  const companyCount = await db.company.count({
    where: {
      userId,
    },
  });

  const contactCount = await db.contact.count({
    where: {
      company: {
        userId,
      }
    },
  });

  const eventsCount = await db.event.count({
    where: {
      userId,
    },
  });

  return (
    <div>
      <h2 className=" font-bold text-2xl mb-4">Dashboard</h2>
      <Separator className="mb-4" />
      <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-lg font-medium">
              Total de Compañías
            </CardTitle>
            <Package className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">{companyCount} Compañías</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-lg font-medium">
              Total de Contactos
            </CardTitle>
            <Contact className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">{contactCount} Contactos</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-lg font-medium">
              Total de Eventos
            </CardTitle>
            <Calendar className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">{eventsCount} Eventos</div>
          </CardContent>
        </Card>
      </div>
      <Separator className="mt-4" />
      <div className="mt-5">
        <h2 className="font-semibold text-2xl">Compañias:</h2>
        <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
          {companies.map((company) => (
            <div key={company.id}>
              <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
                <div className="flex items-center gap-4">
                  {/* <Image
                    src={company.profileImage}
                    alt={company.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  /> */}
                  <div>
                    <h3 className="text-xl font-bold">{company.name}</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <p>
                    <strong>Teléfono:</strong> {company.phone}
                  </p>
                  <p>
                    <strong>País:</strong> {company.country}
                  </p>
                  <p>
                    <strong>Sitio web:</strong>{" "}
                    <a
                      href={company.website}
                      className="text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {company.website}
                    </a>
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <ContactModal contacts={company.contacts} />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="bg-gray-200 p-2 rounded-full dark:bg-gray-900">
                        <Pencil className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <Link href={`/companies/${company.id}`}>
                        <DropdownMenuItem>
                          <Pencil className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                      </Link>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}