'use client';

import Head from "next/head";
import React from "react";
import TodoBody from "@/components/TodoBody";

export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <TodoBody/>
    </>
  );
}