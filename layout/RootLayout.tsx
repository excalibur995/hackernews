import { ReactNode } from "react";
import { styled } from "stitches.config";

type RootLayoutProps = { children: ReactNode };

const Wrapper = styled("div", {
  flexing: "column",
  justifyContent: "flex-start",
  height: "100vh",
  maxWidth: 1280,
  margin: " 0 auto",
  overflow: "hidden auto",
});

const RootLayout = ({ children }: RootLayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default RootLayout;
