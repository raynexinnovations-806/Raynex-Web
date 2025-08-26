import { CustomImagePreview } from "@/components/shared/CustomImagePreview";
import AirIcon from "@/utils/icons/common/AirIcon";
import CrossArrowIcon from "@/utils/icons/common/CrossArrowIcon";
import EarthIcon from "@/utils/icons/common/EarthIcon";
import EyeIcon from "@/utils/icons/common/EyeIcon";
import FireIcon from "@/utils/icons/common/FireIcon";
import LocationIcon from "@/utils/icons/common/LocationIcon";
import LocationOutLineIcon from "@/utils/icons/common/LocationOutLineIcon";
import MailOutLineIcon from "@/utils/icons/common/MailOutLineIcon";
import PrithviIcon from "@/utils/icons/common/PrithviIcon";
import TargetIcon from "@/utils/icons/common/TargetIcon";
import WaterIcon from "@/utils/icons/common/WaterIcon";
import {
  AboutUsEmpoweringImage,
  ExploreServicesBgImage,
  ProjectOverviewBgImage,
} from "@/utils/images/landingpage";
import React from "react";

const About = () => {
  return (
    <div className=" px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px]  py-12 flex justify-center">
      <div className=" flex flex-col items-center max-w-[1190px] w-full">
        <div className="flex gap-10">
          <div className="flex gap-5 flex-col md:flex-row lg:flex-col xl:flex-row">
            <div className="flex gap-4 items-start max-w-[350px]">
              <div className="scale-[0.60]">
                <LocationOutLineIcon />
              </div>
              <div className="flex flex-col gap-1 ">
                <span className="text-xl font-black text-primaryText">
                  Location
                </span>
                <span className="text-common-black">
                  806, Sarthana Business Hub, Sarthana-Jakatnaka, Surat ,
                  Gujarat - 395006
                </span>
              </div>
            </div>
            <div className="flex gap-4 items-start max-w-[350px]">
              <div className="scale-[0.60]">
                <MailOutLineIcon />
              </div>
              <div className="flex flex-col gap-1 ">
                <span className="text-xl font-black text-primaryText">
                  Mail
                </span>
                <span className="text-common-black">info@raynexps.com</span>
              </div>
            </div>
          </div>
          <div className="lg:flex hidden -mt-20">
            <div className="flex relative bg-primaryText">
              <div className="absolute w-full h-full">
                <CustomImagePreview image={ExploreServicesBgImage} />
              </div>
              <div className="z-20 py-2 px-6 lg:px-8 flex flex-col gap-2 ">
                <span className="text-[22px] font-bold text-common-white">
                  Explore Services
                </span>
                <ul className="text-common-white text-sm font-medium list-inside list-disc">
                  <li>Solar Residential Systems</li>
                  <li>Industry Solar</li>
                  <li>Commercial Solar</li>
                  <li>Ground Mounted</li>
                </ul>
                {/* <div className="flex gap-1 items-center">
                <span className="text-common-white underline text-xs">
                  View More
                </span>
                <span className="text-lightGreen scale-75">
                  <CrossArrowIcon />
                </span>
              </div> */}
              </div>
            </div>
            <div className="flex relative bg-lightGreen ">
              <div className="absolute w-full h-full">
                <CustomImagePreview image={ProjectOverviewBgImage} />
              </div>
              <div className="z-20 py-3 px-8 flex flex-col gap-2 ">
                <span className="text-[22px] font-bold text-common-white">
                  Project Overview
                </span>
                <span className="text-[42px] font-black text-common-white">
                  1500+
                </span>
                {/* <div className="flex gap-1 items-center">
                <span className="text-common-white underline text-xs">
                  Export Projects
                </span>
                <span className="text-common-white scale-75">
                  <CrossArrowIcon />
                </span>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 flex flex-col lg:flex-row w-full h-full gap-8 items-center">
          <div className="relative w-[300px] sm:w-[345px] lg:w-1/3 h-[500px] sm:h-[650px] min-w-[300px] sm:min-w-[340px] ">
            <CustomImagePreview image={AboutUsEmpoweringImage} />
          </div>
          <div className="flex flex-col mt-8 lg:w-2/3">
            <div className="text-[22px] text-lightGreen font-semibold">
              ABOUT US
            </div>
            <div className="flex flex-col mt-5 text-5xl sm:text-[68px] font-semibold leading-[76px]">
              <span className="text-primaryText">Empowering a</span>
              <span className="text-lightGreen">Sustainable Future</span>
            </div>
            <div className="flex flex-col gap-3 text-lg text-common-black mt-5 pb-3">
              <span>
                A commitment to building a brighter future for all. Empowering a
                sustainable future is embedded in our name, and we strive to
                live up to our brand promise in everything we do.
              </span>
              <span>
                Guided by our commitment to sustainability and innovation, we
                create solutions that make a lasting, positive impact. Our focus
                is on empowering communities & protecting the environment for a
                brighter, shared future.
              </span>
              <span className="border-b border-lightGreen w-[111px]"></span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between  gap-5 mt-10">
              <div className="flex flex-col gap-[12px]">
                <div className="flex gap-2.5 items-center">
                  <span className="scale-[0.80]">
                    <TargetIcon />
                  </span>
                  <span className="text-2xl font-bold text-primaryText">
                    Our Mission
                  </span>
                </div>
                <div className="text-base text-common-black ">
                  To harness the power of the sun, delivering innovative solar
                  solutions that drive sustainable energy for all.
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="flex gap-2.5 items-center">
                  <span className="scale-[0.80]">
                    <EyeIcon />
                  </span>
                  <span className="text-2xl font-bold text-primaryText">
                    Our Vision
                  </span>
                </div>
                <div className="text-base text-common-black ">
                  A world powered by clean, renewable energy, ensuring a greener
                  & brighter future for generations to come.
                </div>
              </div>
            </div>
            {/* <div className="mt-10">
            <button className="text-common-white py-2 px-4 bg-lightGreen text-lg font-medium">
              Read More
            </button>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
