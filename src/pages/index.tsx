import Head from "next/head";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ContactSection from "~/components/Contact";
import Divider from "~/components/Divider";
import Logos from "~/components/Logos";

export default function Home() {
  return (
    <>
      <Head>
        <title>Max Forbang</title>
        <meta
          name="description"
          content="Code. Design. Brand. Transform your offer using software. Transform your lead flow using marketing."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Tailwind Scrollbar */}
      <main className="flex h-full min-h-screen flex-col items-center bg-gradient-to-b from-[#0a0a0a] to-[#15162c]">
        <Header />
        <div className="max-w-7xl">
          <Hero />
          <Logos />
          <Divider text="PAST CLIENTS" />
          <ContactSection />
        </div>
      </main>
    </>
  );
}

function Header() {
  return (
    <div className="flex w-full max-w-7xl justify-between p-8">
      <div className="flex gap-5">
        <a href="https://twitter.com/maxforbang" target="_blank">
          <FaTwitter className="h-5 w-5" />
        </a>
        <a href="https://linkedin.com/in/max-forbang/" target="_blank">
          <FaLinkedinIn className="h-5 w-5" />
        </a>
        <a href="https://github.com/maxforbang" target="_blank">
          <FaGithub className="h-5 w-5" />
        </a>
      </div>
      <button
        type="button"
        className="whitespace-nowrap rounded-md border border-slate-200 px-2 py-1 text-sm font-semibold text-slate-200 shadow-sm duration-200 hover:bg-slate-400/30"
      >
        Contact
      </button>
    </div>
  );
}

function Hero() {
  return (
    <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-center  px-4 pt-12 sm:px-6 md:pt-32  lg:px-8">
      <div className="flex w-min flex-col justify-center lg:flex-row lg:gap-2">
        <span className="animate-textGradient1 bg-gradient-to-r from-[#0694D8] to-[#00DFD8] bg-clip-text py-2 text-6xl font-bold text-transparent lg:text-8xl">
          Code.
        </span>
        <span className="animate-textGradient2 bg-gradient-to-r from-[#7928CA] to-[#FF0080] bg-clip-text py-2 text-6xl font-bold text-transparent lg:text-8xl">
          Design.
        </span>
        <span className="animate-textGradient3 bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] bg-clip-text py-2 text-6xl font-bold text-transparent lg:text-8xl">
          Brand.
        </span>
      </div>
      <p className="mt-10 w-full max-w-3xl px-8 text-center text-xl font-light leading-8 tracking-wide text-slate-400 lg:text-2xl lg:leading-10">
        Transforming the digital frontier: Elevate your business with
        automations and market-dominating branding.
      </p>
      <div className="mt-16 flex w-full flex-col justify-center gap-6 px-8 lg:flex-row lg:gap-8">
        <button
          type="button"
          className="h-12 w-full rounded-md bg-slate-200 px-3 py-3 font-medium text-slate-800 shadow-sm duration-200 hover:opacity-70 lg:w-48"
        >
          Learn More
        </button>
        <div className="relative h-12 w-full rounded-lg lg:w-48">
          <div className="shadow-gradient absolute inset-0 animate-buttonGradient1 rounded-lg bg-gradient-to-br from-[#0694D8] to-[#00DFD8]"></div>
          <div className="shadow-gradient absolute inset-0 animate-buttonGradient2 rounded-lg bg-gradient-to-br from-[#7928CA] to-[#FF0080]"></div>
          <div className="shadow-gradient absolute inset-0 animate-buttonGradient3 rounded-lg bg-gradient-to-br from-[#FF4D4D] to-[#F9CB28]"></div>
          <button
            type="button"
            className="absolute inset-[1px] z-10 rounded-lg bg-slate-950 font-medium text-slate-200 shadow-sm duration-300 hover:bg-opacity-0 hover:text-slate-950"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
