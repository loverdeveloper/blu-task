import { useState } from "react";

export const usePagination = (getData: (pageNumber: number) => any) => {
  const [items, setItems] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    const list = getData(pageNumber);
    if (!list || !list?.length) {
      setHasMore(false);
      return;
    }
    setPageNumber(pageNumber + 1);
    setItems([...items, ...list]);
  };

  return [items, loadMore, hasMore, pageNumber];
};
// https://retoolapi.dev/gHruOU/data?_page=2&_limit=10
