import React from "react";
import Image from "next/image";
import Link from "next/link";
import { styled } from "stitches.config";
import { AVAILABLE_ROUTES, ROUTES_NAME } from "utils/const";
import { useScroll } from "shared/hooks/useScroll";

const HeaderWrapper = styled("header", {
  background: "Tomato",
  padding: "$8",
  position: "fixed",
  width: "100%",
  maxWidth: "inherit",
  top: 0,
  transition: "all 500ms",
  variants: {
    isScrolledUp: {
      true: {
        top: "-6rem",
      },
    },
  },
});

const Navigation = styled("nav", {
  flexing: "row",
  alignItems: "center",
  gap: "$8",
});

const NaviSection = styled("section", {
  flexing: "column",
  gap: "$2",
  "@bp1": {
    flexing: "row",
    alignItems: "center",
    gap: "$8",
  },
});
const ASection = styled("section", {
  flexing: "row",
  gap: "$4",
  a: {
    fontSize: 14,
    paddingBottom: "$4",
    "&:not(:last-child):after": {
      content: " | ",
    },
    "@bp1": {
      padding: 0,
    },
  },
});

const Title = styled("h1", {
  fontSize: 15,
  margin: 0,
});

export const Header = () => {
  const { scrollDirection, ...rest } = useScroll();
  return (
    <HeaderWrapper isScrolledUp={scrollDirection === "up" && rest.scrollY > 8}>
      <Navigation>
        <Link href="/">
          <Image
            src="https://news.ycombinator.com/y18.gif"
            alt="logo"
            width={18}
            height={18}
          />
        </Link>
        <NaviSection>
          <Link href="/">
            <Title>Hacker News</Title>
          </Link>
          <ASection>
            {AVAILABLE_ROUTES.slice(1).map((routes) => (
              <Link href={`/${routes}`} key={routes}>
                {ROUTES_NAME[routes]}
              </Link>
            ))}
          </ASection>
        </NaviSection>
      </Navigation>
    </HeaderWrapper>
  );
};
