import VirtualizedList from "./VirtualizedList";
import { CommentCard } from "components/CommentCard";
import { GenericNews } from "domain/news/entities/news.entities";
import { useStories } from "domain/news/hooks/news.hooks";
import { styled } from "stitches.config";
import { useInView } from "react-intersection-observer";
import ReactPlaceholder from "react-placeholder/lib";

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
            <ReactPlaceholder
              type="media"
              rows={2}
              key={idx}
              ready={!data[idx].isLoading}
            >
              <CommentSectionComponent key={idx} {...data[idx].data} />
            </ReactPlaceholder>
          )}
        />
      </KidsStyled>
    </>
  );
};

export default CommentSectionComponent;
