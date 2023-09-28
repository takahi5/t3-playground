import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const notificationSeeds: Prisma.NotificationCreateInput[] = [
  {
    text: "エチオピア：MOPLACのオファーが開始しました",
    createdAt: new Date(2023, 8, 1),
  },
  {
    text: "オークションの落札が確定しました",
    createdAt: new Date(2023, 8, 8),
  },
  {
    text: "リクエストしていたオファーが開始しました",
    createdAt: new Date(2023, 8, 22),
  },
  {
    text: "6月にご予約いただいていたロットが日本に入港しました",
    createdAt: new Date(2023, 9, 2),
  },
];

async function main() {
  const notifications = [];
  for (const notificationSeed of notificationSeeds) {
    const notification = prisma.notification.create({
      data: notificationSeed,
    });
    notifications.push(notification);
  }
  return await prisma.$transaction(notifications);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
