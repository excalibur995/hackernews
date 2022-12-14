import { z } from "zod";
import { procedure, router } from "../trpc";
import { storiesRouter } from "./stories";
import { userRouter } from "./user";

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
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
