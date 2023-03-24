import React, { useState } from "react";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import HeroHome from "../partials/HeroHome";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import FeaturesZigZag from "../partials/FeaturesZigzag";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Banner from "../partials/Banner";
import Footer from "../partials/Footer";
import { IntlProvider } from "react-intl";
import { allMessages } from "../messages";

function Home() {
  const [lang, setLang] = useState(true);
  const currentLocale = lang ? "en" : "es";

  return (
    <IntlProvider locale="en" messages={allMessages[currentLocale]}>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header lang={lang} setLang={setLang} />

        {/*  Page content */}
        <main className="grow">
          {/*  Page illustration */}
          <div
            className="relative max-w-6xl mx-auto h-0 pointer-events-none"
            aria-hidden="true"
          >
            <PageIllustration />
          </div>

          {/* sections */}
          <HeroHome />
          <FeaturesBlocks />
          <FeaturesZigZag />
          <Testimonials />
          <Newsletter />
        </main>

        <Banner />

        <Footer />
      </div>
    </IntlProvider>
  );
}

export default Home;
