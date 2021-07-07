import Head from "next/head";

export default function HeaderComponent({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon/rs=w_16,h_16,m.png" sizes="16x16" />
        <link rel="icon" href="/favicon/rs=w_24,h_24,m.png" sizes="24x24" />
        <link rel="icon" href="/favicon/rs=w_32,h_32,m.png" sizes="32x32" />
        <link rel="icon" href="/favicon/rs=w_48,h_48,m.png" sizes="48x48" />
        <link rel="icon" href="/favicon/rs=w_64,h_64,m.png" sizes="64x64" />
        <link href="/favicon/rs=w_64,h_64,m.png" rel="apple-touch-icon" />
      </Head>
    </>
  );
}
