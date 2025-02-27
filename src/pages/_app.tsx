import type { AppProps } from "next/app";
import '@/styles/home.scss';
import { Provider } from "jotai";
import { todoStore1 } from "../../atoms/atom";

export default function App({ Component, pageProps }: AppProps) {
  return <Provider>
    <Component {...pageProps} />;
  </Provider>
}
