import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/next';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
          <Analytics />
      </body>
    </Html>
  );
}
