import { styled } from "stitches.config";

export const ListWrapper = styled("div", {
  "> div": {
    "&:first-child": {
      marginTop: 64,
      "@bp1": {
        marginTop: 38,
      },
    },
  },
});
