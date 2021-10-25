import Document, { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";

// Overrides default _document.js provided by next.js to provide a global
// `lang` attribute. Otherwise is unchanged from base version
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head />

        <body>
          <NextSeo
            title="delete44"
            description="Personal site of software developer delete44"
            canonical="https://www.delete44.com"
          />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
