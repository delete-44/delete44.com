import Head from "next/head";

export default function Custom404() {
  return (
    <div>
      <Head>
        <html lang="en-GB" />
        <title>404: Page not found</title>
      </Head>

      <main className="flex items-center justify-center min-vh-100">
        <h1 className="br b--secondary pr4">404</h1>
        <p className="pl4">Page not found</p>
      </main>
    </div>
  );
}
