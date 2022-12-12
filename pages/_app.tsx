import "../styles/globals.css";
import type { AppType } from "next/app";
import RootLayout from "layout/RootLayout";
import Seo from "layout/Seo";
import { trpc } from "utils/trpc";
import { Header } from "components/Header";

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
