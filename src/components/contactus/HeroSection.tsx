import React from "react";
import { CustomImagePreview } from "../shared/CustomImagePreview";
import { ContactUsPageLandingImage } from "@/utils/images/contactus";

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full h-full items-center relative">
      <div className="absolute w-full h-full">
        <CustomImagePreview
          image={ContactUsPageLandingImage}
          style="object-cover object-right"
        />
      </div>
      <div className="z-20 px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px] w-full h-full py-[200px] flex justify-center">
        <div className="flex  items-center max-w-[1190px] w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <span className="flex text-[42px] font-black text-lightGreen ">
              Contact Us
            </span>
            <span className="text-[22px] text-common-white text-center">
              We acknowledge the worth of your time{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
