import React from "react";
import ReactPlaceholder from "react-placeholder/lib";
import VirtualizedList from "modules/VirtualizedList";
import { NewsCard } from "components/NewsCard";
import { GenericNews } from "domain/news/entities/news.entities";
import { styled } from "stitches.config";

export interface ListCard {
  data: {
    data?: GenericNews;
    isFetched: boolean;
    isLoading: boolean;
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
      <VirtualizedList
        data={data}
        estimateSize={100}
        render={(idx) =>
          data[idx].data?.type !== "comment" ? (
            <ReactPlaceholder
              type="media"
              rows={2}
              key={idx}
              ready={!data[idx].isLoading}
            >
              <NewsCard {...data[idx].data} />
            </ReactPlaceholder>
          ) : null
        }
      />
    </ListWrapper>
  );
};
