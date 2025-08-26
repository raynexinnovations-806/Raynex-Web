import React from "react";
import { CustomImagePreview } from "../shared/CustomImagePreview";
import { LandingPageHeroImage } from "@/utils/images/heroimages";

const WhySolarUsHeroSection = () => {
  return (
    <div className="flex flex-col w-full items-center relative">
      <div className="absolute w-full h-full">
        <CustomImagePreview
          image={LandingPageHeroImage}
          style="object-cover object-right"
        />
      </div>
      <div className="z-20 px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px] w-full  py-[150px] flex justify-center">
        <div className="flex  items-center max-w-[1190px] w-full">
          <div className="flex flex-col w-full gap-8 max-w-[988px]">
            <div className="text-2xl text-lightGreen font-bold">WHY SOLAR?</div>
            <div className="flex flex-col gap-6">
              <div className="text-[42px] leading-[50px] font-black text-primaryText">
                Benefits Of Solar Rooftop System
              </div>
              <div className="text-[22px] text-primaryText">
                your partner in sustainable energy solutions. We harness the
                power of the sun to create a cleaner, brighter future for all.
                Join us in transforming the world with innovative solar
                technology.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySolarUsHeroSection;
