import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Inter } from "@next/font/google";
import clsx from "clsx";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

const inter = Inter({
  subsets: ["latin"],
  // weight: ["400", "700"],
});

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const MyApp: AppType = ({
  Component,
  pageProps,
}: {
  Component: NextPageWithLayout;
  pageProps: Record<string, never>;
}) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <div className={clsx(inter.className)}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
};

export default api.withTRPC(MyApp);
