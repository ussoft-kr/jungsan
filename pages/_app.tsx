import "styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SessionProvider} from "next-auth/react";



import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
  )
}
