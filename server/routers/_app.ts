import { z } from "zod";
import { procedure, router } from "../trpc";
import { storiesRouter } from "./stories";

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `Hello, ${input.text}`,
      };
    }),
  stories: storiesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
