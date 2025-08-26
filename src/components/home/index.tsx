import React from "react";
import HeroSection from "./component/HeroSection";
import About from "./component/About";
import ExploreServices from "./component/ExploreServices";
import WhySolarPower from "./component/WhySolarPower";
import OurProcess from "./component/OurProcess";
import OurPurpose from "./component/OurPurpose";
import WhatClientSay from "./component/WhatClientSay";
import ContactUs from "./component/ContactUs";
import Footer from "../shared/Footer";
10;
const LandingPage = () => {
  return (
    <div className="flex flex-col w-full flex-grow bg-common-white">
      <HeroSection />
      <About />
      <ExploreServices />
      <WhySolarPower />
      <OurProcess />
      <OurPurpose />
      <WhatClientSay />
      <div className="py-[100px]" id="contactUsComponent">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
