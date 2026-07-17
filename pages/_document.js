import { Html, Head, Main, NextScript } from 'next/document';

// Custom Document to augment the <html> and <body> tags.
// Runs on the server only. Useful for lang attributes, meta tags and fonts.
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Personal portfolio built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
