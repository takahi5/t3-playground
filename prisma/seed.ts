import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const notificationSeeds: Prisma.NotificationCreateInput[] = [
  {
    text: "新しい商品が入荷しました！今すぐチェックして、お気に入りを見つけてください。",
    createdAt: new Date(2023, 8, 1, 10, 2),
  },
  {
    text: "お得なセールが開催中です！限定割引価格でお買い物を楽しんでください。",
    createdAt: new Date(2023, 8, 8, 15, 30),
  },
  {
    text: "ご注文の商品が発送されました！お届けまでしばらくお待ちください。",
    createdAt: new Date(2023, 8, 22, 12, 0),
  },
  {
    text: "申し訳ございませんが、ご注文がキャンセルされました。ご購入いただきありがとうございました。",
    createdAt: new Date(2023, 9, 2, 18, 32),
  },
  {
    text: "ご返品処理が完了しました。払い戻し金額はご指定の口座に返金されます。",
    createdAt: new Date(2023, 9, 4, 4, 12),
  },
];

const userSeeds: Prisma.UserCreateInput[] = [
  {
    name: "Alice Johnson",
    avatarUrl: "https://picsum.photos/id/101/200/200",
  },
  {
    name: "Bob Smith",
    avatarUrl: "https://picsum.photos/id/102/200/200",
  },
  {
    name: "Charlie Brown",
    avatarUrl: "https://picsum.photos/id/103/200/200",
  },
  {
    name: "David Wilson",
    avatarUrl: "https://picsum.photos/id/104/200/200",
  },
  {
    name: "Eva Davis",
    avatarUrl: "https://picsum.photos/id/105/200/200",
  },
  {
    name: "Frank Miller",
    avatarUrl: "https://picsum.photos/id/106/200/200",
  },
  {
    name: "Grace Turner",
    avatarUrl: "https://picsum.photos/id/107/200/200",
  },
  {
    name: "Henry Garcia",
    avatarUrl: "https://picsum.photos/id/108/200/200",
  },
  {
    name: "Isabella Lee",
    avatarUrl: "https://picsum.photos/id/109/200/200",
  },
  {
    name: "Jack Harris",
    avatarUrl: "https://picsum.photos/id/110/200/200",
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
  await prisma.$transaction(notifications);

  await prisma.$transaction(
    userSeeds.map((seed) => prisma.user.create({ data: seed }))
  );

  return;
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
