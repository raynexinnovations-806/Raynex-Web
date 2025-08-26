import React from "react";
import { CustomImagePreview } from "../shared/CustomImagePreview";
import { CoreValueImage } from "@/utils/images/aboutus";

const CoreValue = () => {
  return (
    <div className="flex flex-col w-full h-full items-center relative bg-primaryText">
      <div className="absolute w-full h-full">
        <CustomImagePreview
          image={CoreValueImage}
          style="object-cover object-right"
        />
      </div>
      <div className="z-20 px-[10px] sm:px-[30px] md:px-[50px] xl:px-[125px] w-full h-full py-[100px] flex justify-center">
        <div className="flex flex-col  items-center gap-5 max-w-[1190px] w-full">
          <div className="text-2xl font-bold text-common-white">
            Our Core Value
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full">
            <div className="flex flex-col items-center">
              <span className="text-[40px] md:text-[60px] xl:text-[140px] lg:leading-[140px] text-common-white">
                E
              </span>
              <span className="border-t-2  border-lightGreen pt-3 text-center md:px-2 xl:px-6 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-common-white">
                Energy
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[40px] md:text-[60px] xl:text-[140px] lg:leading-[140px] text-common-white">
                M
              </span>
              <span className="border-t-2  border-lightGreen pt-3 text-center md:px-2 xl:px-6 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-common-white">
                Motivation
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[40px] md:text-[60px] xl:text-[140px] lg:leading-[140px] text-common-white">
                P
              </span>
              <span className="border-t-2  border-lightGreen pt-3 text-center md:px-2 xl:px-6 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-common-white">
                Passion
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[40px] md:text-[60px] xl:text-[140px] lg:leading-[140px] text-common-white">
                O
              </span>
              <span className="border-t-2  border-lightGreen pt-3 text-center md:px-2 xl:px-6 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-common-white">
                Out of the box
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[40px] md:text-[60px] xl:text-[140px] lg:leading-[140px] text-common-white">
                W
              </span>
              <span className="border-t-2  border-lightGreen pt-3 text-center md:px-2 xl:px-6 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-common-white">
                We
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[40px] md:text-[60px] xl:text-[140px] lg:leading-[140px] text-common-white">
                E
              </span>
              <span className="border-t-2  border-lightGreen pt-3 text-center md:px-2 xl:px-6 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-common-white">
                Efficient
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[40px] md:text-[60px] xl:text-[140px] lg:leading-[140px] text-common-white">
                R
              </span>
              <span className="border-t-2  border-lightGreen pt-3 text-center md:px-2 xl:px-6 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-common-white">
                Reach out
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValue;
