import { trpc } from "utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "Hello" });
  return <h1>{hello.data?.greeting}</h1>;
}
