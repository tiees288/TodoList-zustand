import type { AppProps } from "next/app";
import '@/styles/home.scss';
import { Provider } from "mobx-react";
import { store } from "@/stores/stores";

export default function App({ Component, pageProps }: AppProps) {
  return <Provider {...store} >
    <Component {...pageProps} />;
  </Provider> 
}
