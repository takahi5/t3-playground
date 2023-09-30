import React from "react";
import { trpc } from "@/utils/trpc";
import dayjs from "dayjs";
import { Notification, Order } from "@prisma/client";
import { Avatar } from "@/client/ui/parts/Avatar";
import { UserLink } from "@/client/ui/parts/UserLink";
import { DeliveryStatus } from "@/client/ui/parts/DeliveryStatus";
import { useQuery } from "@tanstack/react-query";

// fetcherを自分で書く
const fetchOrders = async () => {
  const res = await fetch("http://localhost:3001/api/orders");
  return res.json();
};

export default function NotificationList() {
  // useQueryで型情報を指定する
  const { data: orders, isLoading } = useQuery<Order[]>(
    ["getOrders"],
    fetchOrders
  );

  if (isLoading || !orders) return null;
  return (
    <div className="border-2 border-gray-300 p-4">
      <table className="table-auto text-sm">
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="p-2">
                {dayjs(order.createdAt).format("YYYY/MM/DD HH:mm")}
              </td>
              <td className="p-2 flex flex-row items-center">
                <div className="w-50 flex flex-row items-center">
                  <div className="mx-2">
                    <Avatar imageUrl={order.seller.avatarUrl} />
                  </div>
                  <UserLink user={order.seller} />
                </div>
              </td>
              <td>
                <DeliveryStatus deliveryStatus={order.deliveryStatus} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
