import React from "react";

type Props = {
  deliveryStatus: number;
};

type DotProps = {
  active?: boolean;
};
const Dot: React.FC<DotProps> = ({ active }) => {
  const color = active ? "green" : "gray";
  return <div className={`w-4 h-4 rounded-full   mx-1 bg-${color}-400`} />;
};

const Bar: React.FC = () => {
  return <div className="border-b border-gray-400 w-8" />;
};

export const DeliveryStatus: React.FC<Props> = ({ deliveryStatus }) => {
  return (
    <div className="flex flex-row items-center">
      <Dot active={deliveryStatus > 0} />
      <Bar />
      <Dot active={deliveryStatus > 1} />
      <Bar />
      <Dot active={deliveryStatus > 2} />
      <Bar />
      <Dot active={deliveryStatus > 3} />
      <Bar />
      <Dot active={deliveryStatus > 4} />
    </div>
  );
};
