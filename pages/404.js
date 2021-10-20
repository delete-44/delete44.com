import Head from "next/head";
import Error from "next/error";

export default function Custom404() {
  return (
    <div>
      <Head>
        <html lang="en-GB" />
      </Head>

      <Error statusCode={404} />
    </div>
  );
}
