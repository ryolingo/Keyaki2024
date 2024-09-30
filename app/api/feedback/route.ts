import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

//GET API
export async function GET() {
  try {
    const feedback = await prisma.feedback.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({ message: "Success", feedback }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

//FEEDBACk投稿用API
export async function POST(req: NextRequest) {
  try {
    const { comment, createdAt } = await req.json();

    const feedback = await prisma.feedback.create({
      data: { comment, createdAt },
    });
    return NextResponse.json({ message: "Success", feedback }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
