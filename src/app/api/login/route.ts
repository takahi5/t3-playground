import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request, {}) {
  const user = await prisma.user.findUnique({
    where: {
      id: 1, // 1を自分とする
    },
  });

  return NextResponse.json({ user });
}
