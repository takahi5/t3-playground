import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Title: React.FC<Props> = ({ children }) => {
  return (
    <div className="my-2">
      <h2 className="text-xl font-bold">{children}</h2>
    </div>
  );
};
