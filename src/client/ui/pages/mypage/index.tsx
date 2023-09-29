"use client";

import React from "react";
import NotificationList from "./NotificationList";
import { Title } from "@/client/ui/parts/Title";

export default function Mypage() {
  return (
    <div className="">
      <div className="my-2">
        <Title>お知らせ</Title>
      </div>
      <NotificationList />
    </div>
  );
}
