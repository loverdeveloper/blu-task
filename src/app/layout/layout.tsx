import React from "react";
import { Helmet } from "react-helmet";

import { getPageTitle } from "@/utils/getPageTitle";

export interface LayoutProps {
  title: string;
  className?: string;
  children?: any;
}

export const Layout: React.FC<LayoutProps> = function ({ title, ...props }) {
  return (
    <>
      <Helmet>
        <title>{getPageTitle(title)}</title>
      </Helmet>
      <main {...props} />
    </>
  );
};
