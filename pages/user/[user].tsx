import dayjs from "dayjs";
import React, { useMemo } from "react";
import ReactPlaceholder from "react-placeholder/lib";

import { useStories } from "domain/news/hooks/news.hooks";
import { GetServerSidePropsContext } from "next";
import { styled } from "stitches.config";
import { trpc } from "utils/trpc";
import { ListCard } from "components/ListCard";
import Tabs, { TabsOptions } from "components/Tabs/Tabs";

const Wrapper = styled("div", {
  flexing: "column",
  padding: "$8",
  margin: "64px auto",
  width: "100%",
  gap: "$16",
  "@bp1": {
    margin: "38px auto",
  },
});

const UserSection = styled("section", {
  flexing: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$20",
  "@bp1": {
    justifyContent: "flex-start",
  },
});

const Avatar = styled("div", {
  display: "flex",
  size: 80,
  backgroundColor: "Tomato",
  borderRadius: 999,

  span: {
    fontSize: 28,
    color: "Wheat",
    margin: "auto",
    textTransform: "uppercase",
  },
});
const FirstContainer = styled("div", {
  flexing: "row",
  gap: "$16",
  "> section": {
    flexing: "column-center",
    alignItems: "unset",
    gap: "$4",
    h1: {
      margin: 0,
    },
    time: {
      fontSize: 12,
    },
  },
});
const Karma = styled("span", {
  background: "DodgerBlue",
  color: "Wheat",
  padding: "$4 $8",
  borderRadius: 99,
  width: "fit-content",
  fontSize: 12,
  minHeight: 10,
});

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const username = context.query.user;
  if (username) {
    return {
      props: {
        username,
      },
    };
  }
  return {
    redirect: {
      destination: "/",
    },
  };
};

const UserPage = ({ username }: { username: string }) => {
  const detail = trpc.user.fetchUser.useQuery(username, {
    enabled: typeof username === "string",
  });

  const data = useStories(detail.data?.submitted);
  const submission = useMemo(
    () => data.filter((item) => item.data?.type !== "comment"),
    [data]
  );
  const commentData = useMemo(
    () => data.filter((item) => item.data?.type === "comment"),
    [data]
  );

  const useContent = useMemo(
    (): TabsOptions[] => [
      {
        value: "submission",
        trigger: "Submission",
        content: <ListCard data={submission} />,
      },
      {
        value: "comment",
        trigger: "Comment",
        content: <ListCard data={commentData} />,
      },
    ],
    [commentData, submission]
  );

  return (
    <Wrapper>
      <ReactPlaceholder type="media" rows={2} ready={!detail.isLoading}>
        <UserSection>
          <FirstContainer>
            <Avatar>
              <span>{detail.data?.id?.charAt(0)}</span>
            </Avatar>
            <section>
              <h1>{detail.data?.id}</h1>
              {detail.data?.created && (
                <time>
                  Since{" "}
                  {dayjs.unix(detail.data?.created).format("MMMM DD, YYYY")}
                </time>
              )}
            </section>
          </FirstContainer>
          <Karma title="Karma">{detail.data?.karma}</Karma>
        </UserSection>
      </ReactPlaceholder>
      <Tabs defaultValue="submission" options={useContent} />
    </Wrapper>
  );
};

export default UserPage;
