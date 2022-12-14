import React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { styled } from "stitches.config";

type VirtualizedListProps<T = any[]> = {
  data: T;
  estimateSize: number;
  render: (virtualKey: number) => React.ReactNode;
};

const VirtualizedListContentWrapper = styled("div", {
  width: "100%",
  position: "relative",
});

const VirtualizedList = (props: VirtualizedListProps) => {
  const parentRef = React.useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: props.data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => props.estimateSize,
  });

  return (
    <div ref={parentRef}>
      <VirtualizedListContentWrapper
        css={{ height: virtualizer.getTotalSize() }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            data-index={virtualRow.index}
            ref={virtualizer.measureElement}
          >
            {props.render(virtualRow.index)}
          </div>
        ))}
      </VirtualizedListContentWrapper>
    </div>
  );
};

VirtualizedList.defaultProps = {
  data: [],
  estimateSize: 45,
};

export default VirtualizedList;
