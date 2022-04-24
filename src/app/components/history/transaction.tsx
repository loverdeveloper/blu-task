import React from "react";
import cn from "classnames";
import moment from "jalali-moment";
import { CaretLeft, ArrowDownRight, ArrowUpLeft } from "phosphor-react";
import { digitsEnToFa } from "@persian-tools/persian-tools";

import { getCurrencyView } from "@/utils/getCurrencyView";

export interface TransactionProps {
  className?: string;
  date?: string;
  amount?: number;
  type?: "received" | "sent";
  onClick?: () => void;
}
export const Transaction: React.FC<TransactionProps> = ({
  className,
  date,
  amount,
  type,
  onClick,
}) => {
  return (
    <div className={cn("flex bg-white p-5", className)} onClick={onClick}>
      <div className="flex items-center justify-center h-full ml-2 py-3">
        {type === "received" ? (
          <ArrowDownRight size={22} weight="bold" className="text-red-600" />
        ) : (
          <ArrowUpLeft size={22} weight="bold" className="text-green-600" />
        )}
      </div>
      <div className="flex flex-col">
        <h4 className="text-black text-sm mb-2">{type === "received" ? "دریافت" : "واریز"}</h4>
        <p className="text-gray-400 text-xs">
          {digitsEnToFa(moment(date).locale("fa").format("dddd YYYY/MM/DD"))}
        </p>
      </div>
      <div
        className={cn("mr-auto text-bold", {
          "text-green-600": type === "received",
          "text-gray-600": type !== "received",
        })}
      >
        {getCurrencyView(amount, false)}
        {type === "received" ? "+" : "-"}
        {" ریال "}
      </div>
      <div className="flex items-center justify-center mr-2">
        <CaretLeft />
      </div>
    </div>
  );
};
