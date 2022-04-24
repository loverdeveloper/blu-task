import handleViewport from "react-in-viewport";

import { Loader } from "@/components/UiKit/Loader";
import { usePagination } from "@/hooks/usePagination";
import { PaymentHistoryRequest } from "@/data/rest/PaymentHistoryRequest";
import { Layout } from "@/layout/layout";

const ViewportBlock = handleViewport(Loader);

export const HistoryPage = () => {
  const [items, loadMore, hasMore] = usePagination(fetchList);

  async function fetchList(pageNumber: number) {
    return await new PaymentHistoryRequest({
      body: {
        _page: pageNumber,
        _limit: 10,
      },
    }).fetch();
  }

  return (
    <Layout title="سابقه پرداخت">
      {items.map(function (i) {
        return <div style={{ minHeight: 400 }}>{JSON.stringify(i)}</div>;
      })}
      {hasMore ? (
        <ViewportBlock
          onEnterViewport={() => {
            loadMore();
          }}
        />
      ) : null}
    </Layout>
  );
};
