import Head from "next/head";
import TodoBody from "@/components/TodoBody";
import { TodoProvider } from "@/context/TodoContext";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <TodoProvider>
        <TodoBody />
      </TodoProvider>
    </>
  );
}