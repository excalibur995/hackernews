import React from "react";
import CommentSectionComponent from "modules/CommentSectionComponent";
import VirtualizedList from "modules/VirtualizedList";
import ReactPlaceholder from "react-placeholder";

import { GetServerSidePropsContext } from "next/types";
import { styled } from "stitches.config";
import { trpc } from "utils/trpc";
import { useStories } from "domain/news/hooks/news.hooks";
import { NewsCard } from "components/NewsCard";

const Wrapper = styled("div", {
  marginTop: 64,
  "@bp1": {
    marginTop: 38,
  },
});

const InputArea = styled("form", {
  padding: "$8",
});
const TextArea = styled("textarea", {
  width: "100%",
});

const AddCommentButton = styled("button", {});

const CommentSection = styled("ul", {
  listStyleType: "none",
  margin: 0,
  padding: "$8",
});

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const itemId = context.query.detail;
  if (itemId) {
    return {
      props: {
        itemId: Number(itemId),
      },
    };
  }
  return {
    redirect: {
      destination: "/",
    },
  };
};

const DetailPage = ({ itemId }: { itemId: number }) => {
  const detail = trpc.stories.fetchDetail.useQuery(itemId, {
    enabled: typeof itemId === "number",
  });
  const data = useStories(detail.data?.kids, detail.isFetched);

  return (
    <Wrapper>
      <NewsCard {...detail.data} />
      <InputArea>
        <TextArea rows={5} />
        <AddCommentButton type="submit">Add Comment</AddCommentButton>
      </InputArea>
      <CommentSection>
        <VirtualizedList
          data={data}
          estimateSize={100}
          render={(idx) => (
            <ReactPlaceholder
              type="media"
              rows={2}
              key={idx}
              ready={!data[idx].isLoading}
            >
              <CommentSectionComponent {...data[idx].data} />
            </ReactPlaceholder>
          )}
        />
      </CommentSection>
    </Wrapper>
  );
};

export default DetailPage;
