import ContactUs from "@/components/home/component/ContactUs";
import OurProcess from "@/components/home/component/OurProcess";
import Footer from "@/components/shared/Footer";
import BenefitsOfSolar from "@/components/whysolar/BenefitsOfSolar";
import WhyChooseRaynex from "@/components/whysolar/WhyChooseRaynex";
import WhySolarUsHeroSection from "@/components/whysolar/WhySolarUsHeroSection";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Raynex Power Solution Pvt. Ltd.</title>
      </Head>
      <div className="flex flex-col w-full flex-grow bg-common-white">
        <WhySolarUsHeroSection />
        <BenefitsOfSolar />
        <OurProcess />
        <WhyChooseRaynex />
        <div className="pb-[100px] pt-[100px]">
          <ContactUs />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default index;
