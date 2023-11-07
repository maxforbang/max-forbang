import { useState, type ReactNode, useEffect } from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import clsx from "clsx";
import { scrollToContact } from "~/utils/scrollHandlers";
import { Analytics } from "@vercel/analytics/react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Max Forbang</title>
        <meta
          name="description"
          content="Code. Design. Brand. Transform your offer using software. Transform your lead flow using marketing."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="min-h-full">
        <Header scrollToContact={scrollToContact} />
        <main>
          <div className="mx-auto">
            {children}
            <Analytics />
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;

function Header({ scrollToContact }: { scrollToContact: () => void }) {
  const [transparentHeader, setTransparentHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200;
      if (show) {
        setTransparentHeader(true);
      } else {
        setTransparentHeader(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        "sticky top-0 z-30 transform border-slate-700 backdrop-blur duration-500",
        transparentHeader ? "border-b " : "bg-[#0a0a0a]",
      )}
    >
      <div
        className={clsx(
          "mx-auto flex w-full max-w-7xl justify-between px-8 py-4",
        )}
      >
        <div className="flex items-center gap-5">
          <a href="https://linkedin.com/in/max-forbang/" target="_blank">
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          <a href="https://github.com/maxforbang" target="_blank">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="https://twitter.com/maxforbang" target="_blank">
            <FaTwitter className="h-5 w-5" />
          </a>
        </div>
        <button
          type="button"
          className="whitespace-nowrap rounded-md border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-200 shadow-sm duration-200 hover:bg-slate-400/30"
          onClick={scrollToContact}
        >
          Contact
        </button>
      </div>
    </div>
  );
}
