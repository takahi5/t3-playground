import React from "react";
import Image from "next/image";

type Props = {
  imageUrl: string;
  size?: number;
};

export const Avatar: React.FC<Props> = ({ imageUrl, size = 30 }) => {
  return (
    <Image
      src={imageUrl}
      width={size}
      height={size}
      alt="avatar"
      style={{ borderRadius: size }}
    />
  );
};
