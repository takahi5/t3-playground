import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Title: React.FC<Props> = ({ children }) => {
  return <h2 className="text-xl font-bold">{children}</h2>;
};
