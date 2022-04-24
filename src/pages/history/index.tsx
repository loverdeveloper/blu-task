import handleViewport from "react-in-viewport";

import { Loader } from "@/components/UiKit/Loader";
import { usePagination } from "@/hooks/usePagination";
import {
  TransactionHistoryRequest,
  TransactionRequestType,
} from "@/data/rest/TransactionHistoryRequest";
import { Transaction } from "@/components/history/transaction";
import { UserLayout } from "@/layout/userLayout";
import { DropUp } from "@/components/general/dopUp";
import { useState } from "react";
import { TransactionModelContent } from "@/components/history/modelContent";

const ViewportBlock = handleViewport(Loader);

export const HistoryPage = () => {
  const [isDropUpOpen, setIsDropUpOpen] = useState(false);
  const [transactionDetail, setTransactionDetail] = useState<TransactionRequestType>(null);
  const [items, loadMore, hasMore] = usePagination(fetchList);

  async function fetchList(pageNumber: number) {
    return await new TransactionHistoryRequest({
      body: {
        _page: pageNumber,
        _limit: 15,
      },
    }).fetch();
  }

  function toggleDropUp() {
    setIsDropUpOpen(!isDropUpOpen);
  }

  function onTransactionClick(transaction) {
    setTransactionDetail(transaction);
    setIsDropUpOpen(true);
  }

  return (
    <UserLayout title="سابقه پرداخت">
      <div className="grid gap bg-gray-400">
        {items.map(function (transaction) {
          return (
            <Transaction
              key={transaction.id}
              date={transaction.date}
              amount={transaction.amount}
              type={transaction?.isWithdrawal ? "sent" : "received"}
              onClick={() => {
                onTransactionClick(transaction);
              }}
            />
          );
        })}
      </div>

      {hasMore ? (
        <ViewportBlock
          onEnterViewport={() => {
            loadMore();
          }}
        />
      ) : null}

      <DropUp onClickOutside={toggleDropUp} isOpen={isDropUpOpen}>
        {transactionDetail && <TransactionModelContent transaction={transactionDetail} />}
      </DropUp>
    </UserLayout>
  );
};
