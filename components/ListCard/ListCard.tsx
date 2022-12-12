import { NewsCard } from "components/NewsCard";
import { GenericNews } from "domain/news/entities/news.entities";
import React from "react";
export interface ListCard {
  data: {
    data?: GenericNews;
    isFetched: boolean;
  }[];
}
export const ListCard = ({ data }: ListCard) => {
  return (
    <>
      {data?.map((item, idx) =>
        item.data?.type !== "comment"
          ? item.isFetched && (
              <NewsCard key={String(item.data?.id) + idx} {...item.data} />
            )
          : null
      )}
    </>
  );
};
