import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request, {}) {
  const user = await prisma.user.findUnique({
    where: {
      id: 21, // 自分とする
    },
  });

  return NextResponse.json({ user });
}
