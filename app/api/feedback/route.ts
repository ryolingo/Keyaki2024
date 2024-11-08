export const dynamic = "force-dynmic";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

//GET API
export async function GET(req: NextRequest) {
  try {
    const feedbacks = await prisma.feedback.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(
      { message: "Success", feedbacks },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

// FEEDBACk投稿用API
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
