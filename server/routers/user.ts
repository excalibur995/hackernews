import { fetchUser } from "domain/user/services/user.service";
import { z } from "zod";
import { procedure, router } from "../trpc";

export const userRouter = router({
  fetchUser: procedure
    .input(z.string())
    .query(async ({ input }) => await fetchUser(input)),
});

// export type definition of API
export type AppRouter = typeof userRouter;
