import React from "react";
import { trpc } from "utils/trpc";
import { GetServerSidePropsContext } from "next";
import { ROUTES_NAME } from "utils/const";
import { useStories } from "domain/news/hooks/news.hooks";
import { ListCard } from "components/ListCard";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const stories = context.query.news as keyof typeof ROUTES_NAME;
  const isInRoutes = !!ROUTES_NAME[stories];
  if (isInRoutes) {
    return {
      props: {
        stories,
      },
    };
  }
  return {
    redirect: {
      destination: "/",
    },
  };
};

const NewsDynamicPages = (props: { stories: keyof typeof ROUTES_NAME }) => {
  const stories = trpc.stories.fetchStories.useQuery(props.stories, {
    initialData: [],
    queryKey: ["stories.fetchStories", props.stories],
  });
  const data = useStories(stories.data?.slice(0, 30), stories.isFetched);
  return <ListCard data={data} />;
};

export default NewsDynamicPages;
