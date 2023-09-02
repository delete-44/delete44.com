import About from "@views/about";
import Landing from "@views/landing";
import Blog from "@views/blog";

// Layout for the landing page - overrides "Head" attributes such as title & SEO tags,
// then writes each section in order & renders the footer
export default function Home() {
  return (
    <div className="sc-parent">
      <Landing />
      <About />
      <Blog />

      <footer className="sc-child mv3 flex flex-column flex-row-ns justify-between items-center w-70-ns w-90 center">
        <small>&copy; Anthony | Delete44</small>
      </footer>
    </div>
  );
}
