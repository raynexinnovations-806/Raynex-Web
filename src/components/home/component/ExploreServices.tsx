import { CustomImagePreview } from "@/components/shared/CustomImagePreview";
import AffordablePriceIcon from "@/utils/icons/common/AffordablePriceIcon";
import BoxIcon from "@/utils/icons/common/BoxIcon";
import CrossArrowIcon from "@/utils/icons/common/CrossArrowIcon";
import GroundMountSolarIcon from "@/utils/icons/common/GroundMountSolarIcon";
import IndustrialSolarIcon from "@/utils/icons/common/IndustrialSolarIcon";
import SolarParkIcon from "@/utils/icons/common/SolarParkIcon";
import WalletIcon from "@/utils/icons/common/WalletIcon";
import WindEnergy from "@/utils/icons/common/WindEnergy";
import { OurServiceImage } from "@/utils/images/landingpage";
import React from "react";

const ExploreServices = () => {
  return (
    <div className="flex flex-col ">
      <div className="px-[20px] sm:px-[40px] md:px-[70px] xl:px-[100px] py-7 bg-primaryText flex justify-center">
        <div className="flex flex-col lg:flex-row justify-between max-w-[1190px] w-full">
          <div className="flex flex-col xl:flex-row gap-2 xl:gap-8 items-center">
            <div className="scale-75">
              <BoxIcon />
            </div>
            <div className="flex flex-col text-2xl text-common-white items-center">
              <span>Eco Friendly</span>
              <span className="text-lg">Environments Sustainable Products</span>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-2 xl:gap-8 items-center">
            <div className="scale-75">
              <WalletIcon />
            </div>
            <div className="flex flex-col text-2xl text-common-white">
              <span>Low Maintenance</span>
              <span className="text-lg">Effortless Upkeep Solution</span>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-2 xl:gap-8 items-center">
            <div className="scale-75">
              <AffordablePriceIcon />
            </div>
            <div className="flex flex-col text-2xl text-common-white">
              <span>Affordable Price</span>
              <span className="text-lg">Budget-Friendly Cost</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative" id="servicesComponent">
        <div className="absolute w-full h-full ">
          <CustomImagePreview image={OurServiceImage} style="object-cover" />
        </div>
        <div className="z-20 py-[100px] px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px] flex justify-center">
          <div className="flex items-center flex-col w-full max-w-[1190px]">
            <div className="text-2xl text-common-white font-semibold">
              OUR SERVICES
            </div>
            <div className="flex flex-col  items-center">
              <span className="text-[68px] font-semibold text-common-white text-center">
                Explore Our Services
              </span>
              <span className="text-xl text-common-white max-w-[818px] mt-2 text-center">
                A commitment to building a brighter future for all. Empowering a
                sustainable future is embedded in our name, and we strive to
                live up to our brand promise in everything we do.
              </span>
            </div>
            <div className="flex flex-col lg:flex-row gap-[46px] mt-10 ">
              <div className="flex flex-col gap-3 bg-common-white  p-4 max-w-[400px] rounded-lg">
                <div className="flex flex-col items-start">
                  <span className="scale-75 ">
                    <IndustrialSolarIcon />
                  </span>
                  <span className="text-2xl font-bold text-primaryText">
                    Industrial Solar
                  </span>
                </div>
                <div className="text-xl text-common-black">
                  Raynex power solution understands that industrial facilities
                  have unique energy needs.
                </div>
                {/* <div className="text-xl text-common-black flex gap-2 items-center cursor-pointer">
                <span className="underline hover:text-lightGreen">
                  Read More
                </span>
                <span className="text-lightGreen">
                  <CrossArrowIcon />
                </span>
              </div> */}
              </div>
              <div className="flex flex-col gap-3 bg-common-white  p-4 max-w-[400px] rounded-lg">
                <div className="flex flex-col items-start">
                  <span className="scale-75 ">
                    <GroundMountSolarIcon />
                  </span>
                  <span className="text-2xl font-bold text-primaryText">
                    Ground Mount Solar
                  </span>
                </div>
                <div className="text-xl text-common-black">
                  Raynex specializes in large-scale solar parks, allowing SMEs
                  to invest like owning apartments.
                </div>
                {/* <div className="text-xl text-common-black flex gap-2 items-center cursor-pointer">
                <span className="underline hover:text-lightGreen">
                  Read More
                </span>
                <span className="text-lightGreen">
                  <CrossArrowIcon />
                </span>
              </div> */}
              </div>
              <div className="flex flex-col gap-3 bg-common-white  p-4 max-w-[400px] rounded-lg">
                <div className="flex flex-col items-start">
                  <span className="scale-75">
                    <WindEnergy />
                  </span>
                  <span className="text-2xl font-bold text-primaryText">
                    Wind Park
                  </span>
                </div>
                <div className="text-xl text-common-black">
                  Our Wind Park Solutions provide clean, renewable energy to
                  communities, businesses, and governments.
                </div>
                {/* <div className="text-xl text-common-black flex gap-2 items-center cursor-pointer">
                <span className="underline hover:text-lightGreen">
                  Read More
                </span>
                <span className="text-lightGreen">
                  <CrossArrowIcon />
                </span>
              </div> */}
              </div>
            </div>
            {/* <div className="mt-10 ">
            <button className="py-2 px-3 bg-lightGreen text-common-white text-[18px] font-medium ">
              All Services
            </button>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;
