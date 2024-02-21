import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&amp;display=swap"
                rel="stylesheet"/>
            <link rel="icon" href="data:;base64,iVBORw0KGgo="/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
  );
}
