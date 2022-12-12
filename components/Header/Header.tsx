import React from "react";
import Image from "next/image";
import Link from "next/link";
import { styled } from "stitches.config";

const HeaderWrapper = styled("header", {
  background: "Tomato",
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
  return (
    <HeaderWrapper>
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
            <Link href="/newstories">New</Link>
            <Link href="/topstories">Top</Link>
            <Link href="/beststories">Best</Link>
            <Link href="/askstories">Ask</Link>
            <Link href="/showstories">Show</Link>
            <Link href="/jobstories">Job</Link>
          </ASection>
        </NaviSection>
      </Navigation>
    </HeaderWrapper>
  );
};
