import { CustomImagePreview } from "@/components/shared/CustomImagePreview";
import { OurPurposeImage } from "@/utils/images/landingpage";
import React from "react";

const OurPurpose = () => {
  return (
    <div className="py-[100px] px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px] flex justify-center">
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-4 items-center max-w-[1190px] w-full">
        <div className="flex flex-col gap-[50px] items-center">
          <div className="text-2xl font-bold text-lightGreen text-center">
            Our Purpose: Clean Energy
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-[42px] text-primaryText font-black text-center">
              Creating a sustainable, dependable, and affordable future for all.
            </span>
            <span className="text-xl text-common-black text-center">
              At <span className="font-bold">Raynex Power Solution,</span> we
              believe clean energy isn’t just a dream; it’s the foundation for a
              brighter tomorrow. We’re committed to building a sustainable
              future for all by providing dependable & affordable solar
              solutions that empower individuals, businesses, and communities to
              make a lasting impact.
            </span>
          </div>
          {/* <div>
          <button className="px-3 py-2 text-lg font-medium text-common-white bg-lightGreen">
            Learn More
          </button>
        </div> */}
        </div>
        <div className="relative h-full w-full max-h-[480px] max-w-[480px] min-w-[300px] min-h-[300px]">
          <CustomImagePreview image={OurPurposeImage} style="object-cover " />
        </div>
      </div>
    </div>
  );
};

export default OurPurpose;
