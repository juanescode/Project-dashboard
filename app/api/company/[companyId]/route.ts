import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { companyId: string } }
) {
  try {
    const { userId } = auth();
    const { companyId } = params;
    const values = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const company = await db.company.update({
      where: {
        id: companyId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return  NextResponse.json(company)
  } catch (error) {
    console.log("[COMPANY ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { companyId: string } }) {
  try {
    const { userId } = auth();
    const { companyId } = params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await db.$transaction(async (prisma) => {
      await prisma.event.deleteMany({
        where: {
          companyId: companyId,
        },
      });

      await prisma.company.delete({
        where: {
          id: companyId,
        },
      });
    });

    return new NextResponse("Company and associated events deleted successfully", { status: 200 });
  } catch (error) {
    console.log("[DELETE COMPANY ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}