import { CustomImagePreview } from "@/components/shared/CustomImagePreview";
import { path } from "@/utils/constants/appConstant";
import { LandingPageHeroImage } from "@/utils/images/heroimages";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="flex flex-col w-full h-full items-center relative"
      id="HomeTop"
    >
      <div className="absolute w-full h-full">
        <CustomImagePreview
          image={LandingPageHeroImage}
          style="object-cover object-right"
        />
      </div>
      <div className="z-20 px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px] w-full h-full  py-[200px] flex justify-center">
        <div className="flex  items-center max-w-[1190px] w-full">
          <div className="flex flex-col w-full gap-8 max-w-[988px]">
            <div className="text-2xl text-lightGreen font-bold">
              Welcome to Raynex Power Solution Private Limited
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-[42px] leading-[50px] font-black text-primaryText">
                Empowering the Renewable <br />
                Energy Transition with Visionary Solutions
              </div>
              <div className="text-[22px] text-primaryText">
                Your partner in sustainable energy solutions. We harness the
                power of the sun to create a cleaner, brighter future for all.
                Join us in transforming the world with innovative solar
                technology.
              </div>
            </div>
            <div className="flex gap-[37px]">
              <button
                className="py-2 px-3 text-lg text-common-white font-semibold bg-lightGreen"
                onClick={() => {
                  window.open(path.aboutUs, "_blank");
                }}
              >
                Discover More
              </button>
              <button
                className="py-2 px-3 text-lg text-common-black font-semibold bg-common-white/20 border border-common-black"
                onClick={() => {
                  const element = document.getElementById("servicesComponent");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
