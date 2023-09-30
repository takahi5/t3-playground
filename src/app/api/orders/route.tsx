import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request, {}) {
  const res = await prisma.order.findMany({
    // joinしてbuyerとsellerの情報を取得する
    include: {
      buyer: true,
      seller: true,
    },
  });

  return NextResponse.json(res);
}
