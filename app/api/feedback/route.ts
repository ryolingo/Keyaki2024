import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return "DB接続に失敗しました";
  }
}
//GET API
export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
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
    await main();
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
