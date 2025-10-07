import React from "react";
import Head from "next/head";
import Footer from "@/components/shared/Footer";
import ThankYou from "../../components/ThankYou/ThankYou";
import ThankYouHeroSection from "@/components/ThankYou/ThankYoyHeroBanner";

const ThankYouPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Raynex Power Solution Pvt. Ltd.</title>
      </Head>
      <div className="flex flex-col w-full flex-grow bg-common-white">
        <ThankYou/>
        <Footer />
      </div>
    </>
  );
};

export default ThankYouPage;
