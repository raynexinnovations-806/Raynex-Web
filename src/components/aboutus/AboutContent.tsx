import AirIcon from "@/utils/icons/common/AirIcon";
import EarthIcon from "@/utils/icons/common/EarthIcon";
import FireIcon from "@/utils/icons/common/FireIcon";
import PrithviIcon from "@/utils/icons/common/PrithviIcon";
import WaterIcon from "@/utils/icons/common/WaterIcon";
import React from "react";
import { CustomImagePreview } from "../shared/CustomImagePreview";
import { AboutUsEarthSolar, MissionVisionImage } from "@/utils/images/aboutus";
import TargetIcon from "@/utils/icons/common/TargetIcon";
import EyeIcon from "@/utils/icons/common/EyeIcon";

const AboutContent = () => {
  return (
    <div className="py-[130px] px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px] flex justify-center">
      <div className="flex flex-col gap-[130px] max-w-[1190px] w-full">
        <div className="flex items-center gap-10 flex-col lg:flex-row">
          <div className="flex flex-col  max-w-[780px]">
            <div className="text-2xl text-lightGreen font-semibold">ABOUT</div>
            <div className="flex flex-col text-[68px] leading-[80px] font-semibold mt-[30px]">
              <span className="text-primaryText">Raynex</span>
              <span className="text-lightGreen">Power Solution</span>
            </div>
            <div className="text-xl text-common-black mt-5">
              Promise of building a brighter & sustainable future is deeply
              entrenched in our very ethos. We are striving to live up to our
              brand promise in everything we do.
            </div>
            <div className="flex flex-col gap-[14px] mt-9">
              <div className="text-xl text-common-black">
                Core elements of Ayurveda:
              </div>
              <div className="flex flex-wrap gap-[45px]">
                <div className="flex gap-5 items-center">
                  <span className="scale-90">
                    <EarthIcon />
                  </span>
                  <span className="text-[21px] font-semibold text-lightGreen">
                    Ether (Akash)
                  </span>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="scale-90">
                    <WaterIcon />
                  </span>
                  <span className="text-[21px] font-semibold text-lightGreen">
                    Water (Jal/Apas)
                  </span>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="scale-90">
                    <AirIcon />
                  </span>
                  <span className="text-[21px] font-semibold text-lightGreen">
                    Air (Vayu)
                  </span>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="scale-90">
                    <FireIcon />
                  </span>
                  <span className="text-[21px] font-semibold text-lightGreen">
                    Fire (Agni)
                  </span>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="scale-90">
                    <PrithviIcon />
                  </span>
                  <span className="text-[21px] font-semibold text-lightGreen">
                    Earth (Prithvi)
                  </span>
                </div>
              </div>
              <div className="mt-8 text-xl text-common-black">
                Raynex Power Solution is a leading business enterprise with
                business interests closely aligned with the global energy
                transition journey. We are one of India&apos;s largest renewable
                power generators, and have expanded our presence in Solar And
                Windmill projects, Green Hydrogen & its Derivatives like Green
                Ammonia, Green Methanol and Sustainable Aviation Fuel and Pumped
                Hydro.
              </div>
            </div>
          </div>
          <div className="relative w-full h-full 2xl:max-w-[500px] 2xl:max-h-[550px] 2xl:min-h-[550px] 2xl:min-w-[500px] md:max-w-[400px] md:max-h-[450px] md:min-h-[450px] md:min-w-[400px] max-w-[300px] max-h-[350px] min-h-[350px] min-w-[300px]">
            <CustomImagePreview image={AboutUsEarthSolar} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 ">
          <div className="flex flex-col lg:w-1/2 xl:w-2/5">
            <div className="flex flex-col gap-6">
              <span className="text-[22px] font-semibold text-lightGreen">
                Raynex Power Solution&apos;s
              </span>
              <span className="flex flex-col text-[68px] leading-[68px] font-semibold text-primaryText">
                Mission &<span className="text-lightGreen">Vision</span>
              </span>
            </div>
            <div className="relative w-full h-full max-w-[450px] max-h-[290px] min-h-[290px]">
              <CustomImagePreview image={MissionVisionImage} />
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2 xl:w-3/5">
            <div className="flex flex-col sm:flex-row justify-between border-b border-[#B7B7B7] pb-3 gap-2.5">
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
            <div className="flex pt-4 flex-col gap-4">
              <div className="text-base font-semibold text-primaryText">
                What We Stand For:
              </div>
              <div className="text-base font-semibold text-common-black/80">
                • Sustainability:{" "}
                <span className="font-normal">
                  We believe that everyone should have access to clean energy,
                  which is why we&apos;re committed to making solar energy a reality
                  for all. Every panel installed is a step toward a more
                  sustainable planet.
                </span>
              </div>
              <div className="text-base font-semibold text-common-black/80">
                • Customer Commitment:{" "}
                <span className="font-normal">
                  We&apos;re not just providing solar solutions-we&apos;re building
                  lasting relationships. From consultation to installation and
                  beyond, we&apos;re with you every step of the way, delivering
                  exceptional service and support.
                </span>
              </div>
              <div className="text-base font-semibold text-common-black/80">
                • Innovation:{" "}
                <span className="font-normal">
                  At Raynex Power Solution, we continually strive to bring the
                  latest in solar technology to our customers, ensuring high
                  efficiency, affordability, and ease of use.
                </span>
              </div>
              <div className="text-base font-semibold text-common-black/80">
                • Transparency:{" "}
                <span className="font-normal">
                  We are upfront about our processes, pricing, and timelines,
                  ensuring that every customer understands what to expect.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
