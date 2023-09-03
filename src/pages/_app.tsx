import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Inter } from "@next/font/google";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  // weight: ["400", "700"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={clsx(inter.className)}>
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
