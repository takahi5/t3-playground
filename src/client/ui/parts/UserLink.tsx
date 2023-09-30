import { User } from "@prisma/client";
import Link from "next/link";
import React from "react";

type Props = {
  user: User;
};

export const UserLink: React.FC<Props> = ({ user }) => {
  return (
    <Link href={`users/${user.id}`} className="underline">
      {user.name}
    </Link>
  );
};
