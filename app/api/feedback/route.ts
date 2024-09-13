import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

//GET API
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const feedback = await prisma.feedback.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({ message: "Success", feedback }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//FEEDBACk投稿用API
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { comment, createdAt } = await req.json();

    const feedback = await prisma.feedback.create({
      data: { comment, createdAt },
    });
    return NextResponse.json({ message: "Success", feedback }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
