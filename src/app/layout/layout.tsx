import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { getPageTitle } from "@/utils/getPageTitle";

export interface LayoutProps {
  title: string;
  className?: string;
  children?: any;
}
const helmetContext = {};

export const Layout: React.FC<LayoutProps> = function ({ title, ...props }) {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>{getPageTitle(title)}</title>
      </Helmet>
      <main {...props} />
    </HelmetProvider>
  );
};
