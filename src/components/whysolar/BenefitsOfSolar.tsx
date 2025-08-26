import EarthIcon from "@/utils/icons/common/EarthIcon";
import MaintenanceIcon from "@/utils/icons/common/MaintenanceIcon";
import RupeeIcon from "@/utils/icons/common/RupeeIcon";
import SettingIcon from "@/utils/icons/common/SettingIcon";
import React from "react";

const BenefitsOfSolar = () => {
  return (
    <div className="py-[100px] px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px]  bg-[#F5F5F5] flex justify-center">
      <div className="flex flex-col max-w-[1190px] w-full">
        <div className="flex flex-col gap-4 items-center">
          <span className="text-[42px] font-black text-primaryText ">
            Benefits Of Solar Rooftop System
          </span>
          <span className="text-[22px] text-common-black">
            Solar energy offers numerous benefits to both, individuals and the
            environment.
          </span>
        </div>
        <div className="flex mt-8 gap-6 justify-center w-full flex-wrap">
          <div className="flex flex-col bg-common-white p-4 gap-2 min-w-[250px] max-w-[250px] items-center drop-shadow-lg">
            <div className="scale-75">
              <SettingIcon />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <span className="text-lg font-bold text-primaryText">
                EASY INSTALLATION
              </span>
              <span className="text-base text-common-black text-center ">
                We ensure a safe, secure and hassle-free installation in minimal
                time.
              </span>
            </div>
          </div>
          <div className="flex flex-col bg-common-white p-4 gap-2 min-w-[250px] max-w-[250px] items-center drop-shadow-lg">
            <div className="scale-75">
              <EarthIcon />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <span className="text-lg font-bold text-primaryText">
                ECO FRIENDLY
              </span>
              <span className="text-base text-common-black text-center ">
                Reduce your carbon footprint with Solar Smart and promote green
                living.
              </span>
            </div>
          </div>
          <div className="flex flex-col bg-common-white p-4 gap-2 min-w-[250px] max-w-[250px] items-center drop-shadow-lg">
            <div className="scale-75">
              <MaintenanceIcon />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <span className="text-lg font-bold text-primaryText">
                LOW MAINTENANCE
              </span>
              <span className="text-base text-common-black text-center ">
                Opt for low conservation solutions that prioritize resource
                efficiency.
              </span>
            </div>
          </div>
          <div className="flex flex-col bg-common-white p-4 gap-2 min-w-[250px] max-w-[250px] items-center drop-shadow-lg">
            <div className="scale-75">
              <RupeeIcon />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <span className="text-lg font-bold text-primaryText">
                Energy Savings
              </span>
              <span className="text-base text-common-black text-center ">
                Maximize energy and money savings with our innovative solutions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfSolar;
