import RootLayout from "layout/RootLayout";
import Seo from "layout/Seo";

import type { AppType } from "next/app";
import { trpc } from "utils/trpc";
import { Header } from "components/Header";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Seo>
      <RootLayout>
        <Header />
        <Component {...pageProps} />
      </RootLayout>
    </Seo>
  );
};

export default trpc.withTRPC(MyApp);
