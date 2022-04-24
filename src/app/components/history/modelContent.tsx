import React from "react";
import cn from "classnames";
import moment from "jalali-moment";
import { digitsEnToFa } from "@persian-tools/persian-tools";

import { getCurrencyView } from "@/utils/getCurrencyView";
import { TransactionRequestType } from "@/data/rest/TransactionHistoryRequest";

export interface TransactionModelContentProps {
  className?: string;
  transaction: TransactionRequestType;
}
export const TransactionModelContent: React.FC<TransactionModelContentProps> = ({
  transaction,
  className,
}) => {
  return (
    <div className={cn("flex flex-col bg-white p-5", className)}>
      <div className="flex flex-col text-center w-full">
        <h4 className="text-xl text-black">{getCurrencyView(transaction.amount ?? 0, true)}</h4>
        <p className="text-gray-500 mt-2">مبلغ</p>
      </div>
      <div className="w-full mt-20 grid gap-px bg-gray-200">
        <TransactionModelContentItem
          title="زمان"
          content={moment(transaction.date).locale("fa").format("dddd YYYY/MM/DD")}
        />
        <TransactionModelContentItem title="شماره پیگیری" content={transaction.trackingCode} />
        <TransactionModelContentItem title="شماره مرج" content={transaction.referenceNumber} />
      </div>
    </div>
  );
};

const TransactionModelContentItem = ({ title, content, className = "" }) => {
  return (
    <div className={cn("w-full flex items-center justify-between bg-white py-4", className)}>
      <p className="text-gray-600">{title}</p>
      <p className="text-gray-900">{digitsEnToFa(content)}</p>
    </div>
  );
};
