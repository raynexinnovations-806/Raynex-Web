import DisplayIcon from "@/utils/icons/common/DisplayIcon";
import GroundMountIcon from "@/utils/icons/common/GroundMountIcon";
import Industrial from "@/utils/icons/common/Industrial";
import SiteVisitIcon from "@/utils/icons/common/SiteVisitIcon";
import StartBatchIcon from "@/utils/icons/common/StartBatchIcon";
import WorkingMenIcon from "@/utils/icons/common/WorkingMenIcon";
import React from "react";

const WhyChooseRaynex = () => {
  return (
    <div className="py-[100px] px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px]  bg-[#F5F5F5] flex justify-center">
      <div className="flex flex-col  gap-[100px] max-w-[1190px] w-full">
        <div className="flex flex-col">
          <span className="text-[42px] font-black text-primaryText">
            Why Choose Raynex Power Solution?
          </span>
          <span className="text-xl text-common-black/80">
            Raynex Power Solution offers tailored renewable energy solutions
            with expertise in solar and wind projects. We ensure sustainability,
            quality, and cost-effectiveness, backed by a proven track record and
            innovative technologies.
          </span>
        </div>
        <div className="flex gap-6 flex-wrap items-center justify-center">
          <div className="flex flex-col p-6 gap-3 bg-common-white max-w-[350px] items-center drop-shadow-lg">
            <div className="scale-[0.8]">
              <Industrial />
            </div>
            <div className="text-2xl text-primaryText">Industrial</div>
            <div className="text-xl text-common-black/80 text-center">
              Get your queries answered from the comfort of your home. With
              Raynexps you can easily find technical support and solve your
              queries within minutes.
            </div>
          </div>
          <div className="flex flex-col p-6 gap-3 bg-common-white max-w-[350px] items-center drop-shadow-lg">
            <div className="scale-[0.8]">
              <GroundMountIcon />
            </div>
            <div className="text-2xl text-primaryText">Ground Mount</div>
            <div className="text-xl text-common-black/80 text-center">
              Raynexps excels in EPC for complete solar systems. We offer
              end-to-end service, ensuring expert installation & maintenance
              guidance for seamless solar solutions.
            </div>
          </div>
          <div className="flex flex-col p-6 gap-3 bg-common-white max-w-[350px] items-center drop-shadow-lg">
            <div className="scale-[0.8]">
              <StartBatchIcon />
            </div>
            <div className="text-2xl text-primaryText">Solar Park</div>
            <div className="text-xl text-common-black/80 text-center">
              Raynexps offers top-tier solar panels & inverters for your
              property, ensuring high-quality solar solutions tailored to your
              needs. Industry -leading products guaranteed.
            </div>
          </div>
          <div className="flex flex-col p-6 gap-3 bg-common-white max-w-[350px] items-center drop-shadow-lg">
            <div className="scale-[0.8]">
              <DisplayIcon />
            </div>
            <div className="text-2xl text-primaryText">Latest Technology</div>
            <div className="text-xl text-common-black/80 text-center">
              Discover cutting-edge solar tech! Embrace innovation with our
              high-efficiency solar products. Stay ahead with the latest trends.
              Ask, we provide!
            </div>
          </div>
          <div className="flex flex-col p-6 gap-3 bg-common-white max-w-[350px] items-center drop-shadow-lg">
            <div className="scale-[0.8]">
              <SiteVisitIcon />
            </div>
            <div className="text-2xl text-primaryText">Free Site Visit</div>
            <div className="text-xl text-common-black/80 text-center">
              Raynexps provides complimentary property assessments. Have your
              electricity bills ready for tailored solar recommendations during
              our free site visit.
            </div>
          </div>
          <div className="flex flex-col p-6 gap-3 bg-common-white max-w-[350px] items-center drop-shadow-lg">
            <div className="scale-[0.8]">
              <WorkingMenIcon />
            </div>
            <div className="text-2xl text-primaryText">
              Wi-Fi Monitoring System
            </div>
            <div className="text-xl text-common-black/80 text-center">
              Raynexps provides global free Wi-Fi monitoring for solar systems,
              facilitating easy tracking of solar power performance.
              Effortlessly monitor your system&apos;s efficiency.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseRaynex;
