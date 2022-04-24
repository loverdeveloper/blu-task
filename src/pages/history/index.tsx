import handleViewport from "react-in-viewport";

import { Loader } from "@/components/UiKit/Loader";
import { usePagination } from "@/hooks/usePagination";
import { PaymentHistoryRequest } from "@/data/rest/PaymentHistoryRequest";
import { Transaction } from "@/components/history/transaction";
import { UserLayout } from "@/layout/userLayout";

const ViewportBlock = handleViewport(Loader);

export const HistoryPage = () => {
  const [items, loadMore, hasMore] = usePagination(fetchList);

  async function fetchList(pageNumber: number) {
    return await new PaymentHistoryRequest({
      body: {
        _page: pageNumber,
        _limit: 15,
      },
    }).fetch();
  }

  return (
    <UserLayout title="سابقه پرداخت">
      <div className="grid gap bg-gray-400">
        {items.map(function (i) {
          console.log(i);
          return (
            <Transaction
              date={i.date}
              amount={i.amount}
              type={i?.isWithdrawal ? "sent" : "received"}
            />
          );
        })}
      </div>
      {hasMore ? (
        <ViewportBlock
          onEnterViewport={() => {
            console.log("in view");
            loadMore();
          }}
        />
      ) : null}
    </UserLayout>
  );
};
