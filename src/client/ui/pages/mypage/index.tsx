"use client";

import React from "react";
import NotificationList from "./NotificationList";
import { Title } from "@/client/ui/parts/Title";
import { Spacer } from "@/client/ui/parts/Spacer";
import OrderList from "./OrderList";
import OrderListRest from "./OrderListRest";

export default function Mypage() {
  return (
    <div className="">
      <div className="my-2">
        <Title>お知らせ</Title>
      </div>
      <NotificationList />
      <Spacer />
      <div className="my-2">
        <Title>注文</Title>
      </div>
      <OrderList />
      <Spacer />
      <div className="my-2">
        <Title>注文(RESTで取得してみる)</Title>
      </div>
      <OrderListRest />
    </div>
  );
}
