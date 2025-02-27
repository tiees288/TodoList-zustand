import Head from "next/head";
import TodoBody from "@/components/TodoBody";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
        <TodoBody />
    </>
  );
}