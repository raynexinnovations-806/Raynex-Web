import { CustomImagePreview } from "@/components/shared/CustomImagePreview";
import DotLineShit from "@/utils/icons/common/DotLineShit";
import GreenHeroIcon from "@/utils/icons/common/GreenHeroIcon";
import PayForAvgIcon from "@/utils/icons/common/PayForAvgIcon";
import RisingTariffIcon from "@/utils/icons/common/RisingTariffIcon";
import SavingIcon from "@/utils/icons/common/SavingIcon";
import { WhySolarImage } from "@/utils/images/landingpage";
import React from "react";

const WhySolarPower = () => {
  return (
    <div className=" py-[100px] px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px]  flex justify-center">
      <div className="flex flex-col xl:flex-row items-center justify-center max-w-[1190px] w-full gap-[50px]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-bold  text-lightGreen">
              Why use solar power ?
            </div>
            <div className="text-[42px] text-primaryText font-black max-w-[515px]">
              Live Green, Love Green, Think Green.
            </div>
            <div className="text-xl text-common-black max-w-[515px]">
              We deliver customized, high-performance solar solutions that
              reduce energy costs and promote sustainability. Our expert team
              ensures reliable installations with top-quality products, offering
              lasting efficiency and value.
            </div>
          </div>
          <div className="relative w-[400px] md:w-[515px] h-[331px]">
            <CustomImagePreview image={WhySolarImage} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 ">
          <div className="flex flex-col gap-5 pt-10">
            <div className="flex flex-col p-7 gap-[18px] drop-shadow-md max-w-[360px] items-center bg-common-white">
              <div className="scale-90">
                <SavingIcon />
              </div>
              <div className="text-xl text-primaryText font-bold">
                Guaranteed Lifetime Saving
              </div>
              <div className="text-base text-common-black text-center">
                Save up to 80% on your electricity bills with solar energy. Get
                a free quote today & start enjoying clean, affordable power!
              </div>
            </div>
            <div className="flex flex-col p-7 gap-[18px] drop-shadow-md max-w-[360px] items-center bg-common-white">
              <div className="scale-90">
                <GreenHeroIcon />
              </div>
              <div className="text-xl text-primaryText font-bold">
                Become a Green Hero
              </div>
              <div className="text-base text-common-black text-center">
                Installing a 1 kwp solar system cuts emissions equivalent to
                planting 50 trees. Choose solar and help green the planet!
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="flex flex-col p-7 gap-[18px] drop-shadow-md max-w-[360px] items-center bg-common-white">
              <div className="scale-90">
                <PayForAvgIcon />
              </div>
              <div className="text-xl text-primaryText font-bold">
                Pays for avg.
              </div>
              <div className="text-base text-common-black text-center">
                Recover your investment in just 3-4 years with our solar
                solutions. Start saving and enjoy long-term energy benefits!
              </div>
            </div>
            <div className="flex flex-col p-7 gap-[18px] drop-shadow-md max-w-[360px] items-center bg-common-white z-10">
              <div className="scale-90">
                <RisingTariffIcon />
              </div>
              <div className="text-xl text-primaryText font-bold">
                Freedom From Rising Tariffs
              </div>
              <div className="text-base text-common-black text-center">
                Grid tariffs rise by 3-5% annually, driving up electricity
                costs. Switch to solar and shield yourself from these hikes!
              </div>
            </div>
            <div className="hidden sm:absolute bottom-14 -right-8">
              <DotLineShit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySolarPower;
