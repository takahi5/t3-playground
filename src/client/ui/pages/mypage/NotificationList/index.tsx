import React from "react";
import { trpc } from "@/utils/trpc";
import dayjs from "dayjs";
import { Notification } from "@prisma/client";
import { NotificationListPresentation } from "./presentation";

type Props = {};

export const NotificationList: React.FC<Props> = ({}) => {
  let {
    data: notifications,
    isLoading,
    isFetching,
  } = trpc.getNotifications.useQuery();

  if (!notifications) {
    return null;
  }
  return <NotificationListPresentation notifications={notifications} />;
};
