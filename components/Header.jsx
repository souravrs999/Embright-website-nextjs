import Head from "next/head";

export default function HeaderComponent({children}) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
    </>
  );
}
