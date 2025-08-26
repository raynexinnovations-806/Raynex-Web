import { CustomImagePreview } from "@/components/shared/CustomImagePreview";
import ProjectPlanningIcon from "@/utils/icons/common/ProjectPlanningIcon";
import ReadyToUseIcon from "@/utils/icons/common/ReadyToUseIcon";
import ResearchAnalysisIcon from "@/utils/icons/common/ResearchAnalysisIcon";
import SolarInstallationIcon from "@/utils/icons/common/SolarInstallationIcon";
import { OurProcessImage } from "@/utils/images/landingpage";
import React from "react";

const OurProcess = () => {
  return (
    <div className="flex flex-col relative ">
      <div className="absolute w-full  h-full">
        <CustomImagePreview image={OurProcessImage} style="object-cover" />
      </div>
      <div className="z-20 py-[100px] px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px] flex justify-center">
        <div className=" flex flex-col items-center w-full h-full max-w-[1190px] gap-[49px]">
          <div className="flex flex-col gap-2 items-center">
            <div className="text-2xl text-common-white font-semibold">
              OUR PROCESS
            </div>
            <div className="flex flex-col gap-3 items-center">
              <span className="text-[68px] font-semibold text-common-white">
                Working Process for services
              </span>
              <span className="text-xl text-common-white text-center max-w-[900px]">
                Our streamlined process ensures seamless service from
                consultation to installation. We design, install, and maintain
                your solar solution with care.
              </span>
            </div>
          </div>
          <div className="hidden xl:flex flex-col ">
            <div className="flex justify-center gap-4 items-center">
              <div className="scale-[0.7]">
                <ProjectPlanningIcon />
              </div>
              <div className="border-2 w-[150px] h-fit border-common-white rounded"></div>
              <div className="scale-[0.7]">
                <ResearchAnalysisIcon />
              </div>
              <div className="border-2 w-[150px] h-fit border-common-white rounded"></div>
              <div className="scale-[0.7]">
                <SolarInstallationIcon />
              </div>
              <div className="border-2 w-[150px] h-fit border-common-white rounded"></div>
              <div className="scale-[0.7]">
                <ReadyToUseIcon />
              </div>
            </div>
            <div className="flex justify-between gap-8">
              <div className="flex flex-col gap-2.5 max-w-[320px] items-center">
                <span className="text-xl font-bold text-common-white">
                  Project Planning
                </span>
                <span className="text-lg text-common-white/80 text-center">
                  We assess your energy needs, design custom solar solution, and
                  manage installation for optimal efficiency.
                </span>
              </div>
              <div className="flex flex-col gap-2.5 max-w-[320px] items-center">
                <span className="text-xl font-bold text-common-white">
                  Research & Analysis
                </span>
                <span className="text-lg text-common-white/80 text-center">
                  We conduct in-depth research and analysis to design efficient
                  solar solutions tailored to your needs.
                </span>
              </div>
              <div className="flex flex-col gap-2.5 max-w-[320px] items-center">
                <span className="text-xl font-bold text-common-white">
                  Solar Installation
                </span>
                <span className="text-lg text-common-white/80 text-center">
                  Professional solar installation with precision & care,
                  ensuring optimal performance & long-term energy savings.
                </span>
              </div>
              <div className="flex flex-col gap-2.5 max-w-[320px] items-center">
                <span className="text-xl font-bold text-common-white">
                  Ready To Use
                </span>
                <span className="text-lg text-common-white/80 text-center">
                  Grid tariffs increase by 3-5% annually, driving up electricity
                  costs. Switch to solar and secure long-term savings!
                </span>
              </div>
            </div>
          </div>
          <div className="flex xl:hidden flex-col gap-3 ">
            <div className="flex flex-col gap-2 items-center">
              <div className="scale-[0.7]">
                <ProjectPlanningIcon />
              </div>
              <div className="flex flex-col gap-2.5 max-w-[320px] items-center">
                <span className="text-xl font-bold text-common-white">
                  Project Planning
                </span>
                <span className="text-lg text-common-white/80 text-center">
                  We assess your energy needs, design custom solar solution, and
                  manage installation for optimal efficiency.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="scale-[0.7]">
                <ResearchAnalysisIcon />
              </div>
              <div className="flex flex-col gap-2.5 max-w-[320px] items-center">
                <span className="text-xl font-bold text-common-white">
                  Research & Analysis
                </span>
                <span className="text-lg text-common-white/80 text-center">
                  We conduct in-depth research and analysis to design efficient
                  solar solutions tailored to your needs.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="scale-[0.7]">
                <SolarInstallationIcon />
              </div>
              <div className="flex flex-col gap-2.5 max-w-[320px] items-center">
                <span className="text-xl font-bold text-common-white">
                  Solar Installation
                </span>
                <span className="text-lg text-common-white/80 text-center">
                  Professional solar installation with precision & care,
                  ensuring optimal performance & long-term energy savings.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="scale-[0.7]">
                <ReadyToUseIcon />
              </div>
              <div className="flex flex-col gap-2.5 max-w-[320px] items-center">
                <span className="text-xl font-bold text-common-white">
                  Ready To Use
                </span>
                <span className="text-lg text-common-white/80 text-center">
                  Grid tariffs increase by 3-5% annually, driving up electricity
                  costs. Switch to solar and secure long-term savings!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
