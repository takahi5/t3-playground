import React from "react";
import { trpc } from "@/utils/trpc";

type Props = {};

export const NotificationList: React.FC<Props> = ({}) => {
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
              <td className="p-2">{notification.createdAt.toString()}</td>
              <td className="p-2">{notification.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
