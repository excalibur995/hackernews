import { ListCard } from "components/ListCard";
import { useStories } from "domain/news/hooks/news.hooks";
import { trpc } from "utils/trpc";

export default function Home() {
  const stories = trpc.stories.fetchStories.useQuery("newstories", {
    initialData: [],
  });
  const data = useStories(stories.data?.slice(0, 30), stories.isFetched);
  return <ListCard data={data} />;
}
