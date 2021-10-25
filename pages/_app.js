import "tachyons/css/tachyons.min.css";
import "../styles/globals.scss";

// Global entrypoint into Next app
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
