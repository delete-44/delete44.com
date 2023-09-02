import About from "@views/about";
import Landing from "@views/landing";

// Layout for the landing page - overrides "Head" attributes such as title & SEO tags,
// then writes each section in order & renders the footer
export default function Home() {
  return (
    <div className="sc-parent">
      <Landing />
      <About />

      <footer className="sc-child mv3 flex flex-row justify-start items-center w-70-ns w-90 center">
        <small>&copy; delete44</small>
        <span className="mh2">&middot;</span>
        <a
          href={process.env.writeAsLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <small>Blog</small>
        </a>
      </footer>
    </div>
  );
}
