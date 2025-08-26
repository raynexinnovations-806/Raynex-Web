import HeroSection from "@/components/contactus/HeroSection";
import ContactUs from "@/components/home/component/ContactUs";
import { CustomImagePreview } from "@/components/shared/CustomImagePreview";
import Footer from "@/components/shared/Footer";
import { ContactUsPageLandingImage } from "@/utils/images/contactus";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Raynex Power Solution Pvt. Ltd.</title>
      </Head>
      <div className="flex flex-col w-full flex-grow bg-common-white">
        <HeroSection />
        <div className="flex flex-col py-[125px] items-center w-full px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px]">
          <div className="flex flex-col gap-5 items-center">
            <span className="text-[42px] font-black text-primaryText">
              Get in Touch
            </span>
            <span className="text-xl text-common-black text-center">
              To request a quote or make other enquiry, and we will get back to
              you at the earliest
            </span>
          </div>
        </div>
        <div className="pb-[100px]">
          <ContactUs />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default index;
