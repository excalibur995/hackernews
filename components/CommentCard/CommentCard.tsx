import React from "react";
import { GenericNews } from "domain/news/entities/news.entities";
import { styled } from "stitches.config";
import { getRelativeTo } from "utils/utils";

const ListCard = styled("li", {
  flexing: "column",
  gap: "$8",
  borderTop: "thin solid #efefefef",
  padding: "$12",
  fontSize: 12,
  minHeight: 55,
});

const UserSection = styled("section", {
  flexing: "row",
  alignItems: "center",
  gap: "$8",
  "> section": {
    flexing: "column",
  },
});

const Avatar = styled("div", {
  display: "flex",
  size: 24,
  backgroundColor: "Tomato",
  borderRadius: 999,
  fontSize: 18,
  span: {
    color: "Wheat",
    margin: "auto",
    textTransform: "uppercase",
  },
});

export const CommentCard = (props: GenericNews) => {
  return !props.deleted && !props.dead ? (
    <ListCard>
      <UserSection>
        <Avatar>
          <span>{props.by?.charAt(0)}</span>
        </Avatar>
        <section>
          <b>{props.by}</b>
          {props.time && <time>{getRelativeTo(props.time)}</time>}
        </section>
      </UserSection>
      <span dangerouslySetInnerHTML={{ __html: props?.text ?? "" }} />
    </ListCard>
  ) : null;
};
