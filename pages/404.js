import Head from "next/head";

// Overrides default 404 page to provide light/dark-them appropriate styling
export default function Custom404() {
  return (
    <>
      <Head>
        <title>404: Page not found</title>
      </Head>

      <main className="flex items-center justify-center min-vh-100">
        <h1 className="br b--secondary pr4">404</h1>
        <p className="pl4">Page not found</p>
      </main>
    </>
  );
}
