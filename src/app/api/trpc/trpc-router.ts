import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const t = initTRPC.create({
  transformer: superjson,
});

export const appRouter = t.router({
  getUsers: t.procedure.query(({ ctx }) => {
    return prisma.user.findMany();
  }),
  getNotifications: t.procedure.query(({ ctx }) => {
    return prisma.notification.findMany();
  }),
  getOrders: t.procedure.query(({ ctx }) => {
    // ctxから自分のuserIdを取ってきたりできるはず

    return prisma.order.findMany({
      // joinしてbuyerとsellerの情報を取得する
      include: {
        buyer: true,
        seller: true,
      },
    });
  }),
});

export type AppRouter = typeof appRouter;
