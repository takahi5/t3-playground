"use client";

import React from "react";
import NotificationList from "./NotificationList";

export default function Mypage() {
  return (
    <div className="">
      <div className="my-2">
        <h2 className="text-xl font-bold">お知らせ</h2>
      </div>
      <NotificationList />
    </div>
  );
}
