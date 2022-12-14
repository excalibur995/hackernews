import { CommentCard } from "components/CommentCard";
import { GenericNews } from "domain/news/entities/news.entities";
import { useStories } from "domain/news/hooks/news.hooks";
import { styled } from "stitches.config";

const KidsStyled = styled("div", {
  paddingLeft: "$16",
});

const CommentSectionComponent = (props: GenericNews) => {
  const data = useStories(props?.kids, props.kids && props.kids.length > 0);
  return (
    <>
      <CommentCard {...props} />
      <KidsStyled>
        {data?.map((item, idx) => (
          <CommentSectionComponent
            key={String(item.data?.id) + idx}
            {...item.data}
          />
        ))}
      </KidsStyled>
    </>
  );
};

export default CommentSectionComponent;
