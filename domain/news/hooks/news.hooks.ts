import { useQueries } from "@tanstack/react-query";
import { fetchStoriesDetail } from "../services/news.service";

export const useStories = (stories: number[] = [], enabled?: boolean) =>
  useQueries({
    queries: stories.map((story) => {
      return {
        queryKey: ["user", story],
        queryFn: async () => await fetchStoriesDetail(story),
        enabled: typeof story === "number" && enabled && !!stories,
      };
    }),
  });
