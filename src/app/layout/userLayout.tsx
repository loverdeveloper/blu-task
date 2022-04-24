import React from "react";

import { Layout, LayoutProps } from "@/layout/layout";
import { Header } from "@/components/general/transaction";

export interface UserLayoutProps extends LayoutProps {}

export const UserLayout: React.FC<UserLayoutProps> = ({ title, className, ...props }) => {
  return (
    <Layout title={title}>
      <Header title={title} />
      <section className={className} {...props}>
        {props.children}
      </section>
    </Layout>
  );
};
