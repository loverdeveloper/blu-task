import { FC } from "react";

import { HistoryPage } from "./history";
import { HomePage } from "./home";

export type routeType = {
  path: string;
  page: FC<any>;
  exact: boolean;
};

export const APPLICATION_ROUTES: routeType[] = [
  { path: "/", page: HomePage, exact: true },
  { path: "/history", page: HistoryPage, exact: true },
];
