import { NewsCard } from "components/NewsCard";
import { GenericNews } from "domain/news/entities/news.entities";
import React from "react";
import { styled } from "stitches.config";
export interface ListCard {
  data: {
    data?: GenericNews;
    isFetched: boolean;
  }[];
}

const ListWrapper = styled("div", {
  "> div": {
    "&:first-child": {
      marginTop: 64,
      "@bp1": {
        marginTop: 38,
      },
    },
  },
});
export const ListCard = ({ data }: ListCard) => {
  return (
    <ListWrapper>
      {data?.map((item, idx) =>
        item.data?.type !== "comment"
          ? item.isFetched && (
              <NewsCard key={String(item.data?.id) + idx} {...item.data} />
            )
          : null
      )}
    </ListWrapper>
  );
};
