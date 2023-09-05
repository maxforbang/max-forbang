import ContactSection from "~/components/Contact";
// import Divider from "~/components/Divider";
// import { Reviews } from "~/components/Reviews";
import Logos from "~/components/Logos";
import Hero from "~/components/Hero";
import Layout from "~/components/Layout";
import Mastela from "~/components/Mastela";
import Steely from "~/components/Steely";
import type { NextPageWithLayout } from "./_app";
import { type ReactElement } from "react";

const Home: NextPageWithLayout = () => {
  return (
    <>
      {/* TODO: Tailwind Scrollbar */}
      <main className="flex h-full  flex-col items-center ">
        <div className="min-h-screen w-full bg-gradient-to-b from-[#0a0a0a] to-[#0b0b16]">
          <div className="mx-auto max-w-7xl">
            <Hero />
            <Logos />
          </div>
        </div>
        <div className="max-w-7xl px-8">
          {/* <Reviews />
          <Divider text="PREVIOUS WORK" /> */}
          <Mastela />
          <Steely />
          <ContactSection />
        </div>
      </main>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};


