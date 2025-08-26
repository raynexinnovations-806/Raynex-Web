import AboutContent from "@/components/aboutus/AboutContent";
import AboutUsHeroSection from "@/components/aboutus/AboutUsHeroSection";
import CoreValue from "@/components/aboutus/CoreValue";
import OurTeam from "@/components/aboutus/OurTeam";
import ContactUs from "@/components/home/component/ContactUs";
import Footer from "@/components/shared/Footer";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      {" "}
      <Head>
        <title>Raynex Power Solution Pvt. Ltd.</title>
      </Head>
      <div className="flex flex-col w-full flex-grow bg-common-white">
        <AboutUsHeroSection />
        <AboutContent />
        <CoreValue />
        <OurTeam />
        <div className="pb-[100px]">
          <ContactUs />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default index;
