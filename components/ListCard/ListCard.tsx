import React from "react";
import ReactPlaceholder from "react-placeholder/lib";
import VirtualizedList from "modules/VirtualizedList";
import { NewsCard } from "components/NewsCard";
import { GenericNews } from "domain/news/entities/news.entities";
import { CommentCard } from "components/CommentCard";

export interface ListCard {
  data: {
    data?: GenericNews;
    isFetched: boolean;
    isLoading: boolean;
  }[];
}

export const ListCard = ({ data }: ListCard) => {
  return (
    <>
      <VirtualizedList
        data={data}
        estimateSize={100}
        render={(idx) =>
          !data[idx].data?.dead && !data[idx].data?.deleted ? (
            <ReactPlaceholder
              type="media"
              rows={2}
              key={idx}
              ready={!data[idx].isLoading}
            >
              {data[idx].data?.type !== "comment" ? (
                <NewsCard {...data[idx].data} />
              ) : (
                <CommentCard {...data[idx].data} />
              )}
            </ReactPlaceholder>
          ) : null
        }
      />
    </>
  );
};
