import { GenericNews } from "domain/news/entities/news.entities";
import React from "react";
import { styled } from "stitches.config";
import { getDomain, getRelativeTo } from "utils/utils";

const CardWrapper = styled("div", {
  borderBottom: "thin solid #efefefef",
  padding: "$8",
  gap: "$8",
  display: "grid",
  gridTemplateColumns: "50px 2fr",
  variants: {
    isNotUsingScore: {
      true: {
        flexing: "row",
      },
    },
  },
});

const ScoreWrapper = styled("div", {
  gridCenter: "initial",
});

const ScoreContainer = styled("div", {
  display: "inherit",
  fontSize: 12,
  size: 30,
  border: "thin solid #efefefef",
  textAlign: "center",
  span: {
    margin: "auto",
    width: "100%",
  },
});

const NewsDetailContainer = styled("div", {
  display: "inherit",
  h1: { margin: 0, fontSize: 14, fontWeight: 500 },
  "> a": { fontSize: 12 },
  section: {
    flexing: "row",
    gap: "$8",
    fontSize: 10,
  },
  gap: "$4",
});

const Comments = styled("a", {
  "&:after": {
    content: " Comments",
  },
});

const User = styled("a", {
  "&:before": {
    content: "by ",
  },
});

export const NewsCard = (props: GenericNews) => {
  const onClickNewsWithoutUrl = () => {
    !props.url && console.log("no url");
  };
  return (
    <CardWrapper isNotUsingScore={!props.score}>
      {props.score && (
        <ScoreWrapper>
          <ScoreContainer>
            <span>{props.score}</span>
          </ScoreContainer>
        </ScoreWrapper>
      )}
      <NewsDetailContainer>
        <a href={props?.url} onClick={onClickNewsWithoutUrl}>
          <h1>{props.title}</h1>
        </a>
        {props.url && <a href={props.url}>{getDomain(props.url)}</a>}
        <section>
          {props.kids && <Comments>{props.kids.length}</Comments>}
          {props.by && <User>{props.by}</User>}
          {props.time && <span>{getRelativeTo(props.time)}</span>}
        </section>
      </NewsDetailContainer>
    </CardWrapper>
  );
};
