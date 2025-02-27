import Head from "next/head";
import { Provider, useAtom, useAtomValue, useSetAtom } from "jotai";
import TodoBody from "@/components/TodoBody";
import { todoStore1, todoStore2 } from "../../atoms/atom";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Provider store={todoStore1}>
        <TodoBody />
      </Provider>
    </>
  );
}