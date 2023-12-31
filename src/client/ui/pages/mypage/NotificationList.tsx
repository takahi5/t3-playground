import React from "react";
import { trpc } from "@/utils/trpc";
import dayjs from "dayjs";
import { Notification } from "@prisma/client";

export default function NotificationList() {
  let {
    data: notifications,
    isLoading,
    isFetching,
  } = trpc.getNotifications.useQuery();

  return (
    <div className="border-2 border-gray-300 p-4">
      <table className="table-auto text-sm">
        <tbody>
          {notifications?.map((notification) => (
            <tr key={notification.id}>
              <td className="p-2">
                {dayjs(notification.createdAt).format("YYYY/MM/DD HH:mm")}
              </td>
              <td className="p-2">{notification.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
