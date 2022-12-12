import { fetchStories } from "domain/news/services/news.service";
import { AVAILABLE_ROUTES } from "utils/const";
import { z } from "zod";
import { procedure, router } from "../trpc";

export const storiesRouter = router({
  fetchStories: procedure
    .input(z.enum(AVAILABLE_ROUTES).default("newstories"))
    .query(async ({ input }) => await fetchStories(input)),
});

// export type definition of API
export type AppRouter = typeof storiesRouter;
