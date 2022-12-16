import ReactPlaceholder from "react-placeholder/lib";
import VirtualizedList from "./VirtualizedList";
import { CommentCard } from "components/CommentCard";
import { GenericNews } from "domain/news/entities/news.entities";
import { useStories } from "domain/news/hooks/news.hooks";
import { styled } from "stitches.config";
import { useInView } from "react-intersection-observer";

const KidsStyled = styled("ul", {
  paddingLeft: "$16",
});

const CommentSectionComponent = (props: GenericNews) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.9 });
  const data = useStories(props?.kids, inView);
  return (
    <>
      <CommentCard {...props} />
      <KidsStyled ref={ref}>
        <VirtualizedList
          data={data}
          estimateSize={1000}
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
