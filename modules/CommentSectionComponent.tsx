import VirtualizedList from "./VirtualizedList";
import { CommentCard } from "components/CommentCard";
import { GenericNews } from "domain/news/entities/news.entities";
import { useStories } from "domain/news/hooks/news.hooks";
import { styled } from "stitches.config";
import { useInView } from "react-intersection-observer";

const KidsStyled = styled("div", {
  paddingLeft: "$16",
});

const CommentSectionComponent = (props: GenericNews) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const data = useStories(props?.kids, inView);
  return (
    <>
      <CommentCard {...props} />
      <KidsStyled ref={ref}>
        <VirtualizedList
          data={data}
          estimateSize={100}
          render={(idx) => (
            <CommentSectionComponent key={idx} {...data[idx].data} />
          )}
        />
      </KidsStyled>
    </>
  );
};

export default CommentSectionComponent;
