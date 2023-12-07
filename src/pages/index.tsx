import { api } from "cchii/utils/api";
import Filosofi from "./components/Filosofi";
export default function Home({}) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Filosofi />
    </>
  );
}
