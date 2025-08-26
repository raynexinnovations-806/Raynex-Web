import React from "react";
import { CustomImagePreview } from "../shared/CustomImagePreview";
import { ankit, harpal, meet, mitul, yagnesh } from "@/utils/images/team";

const OurTeam = () => {
  return (
    <div className="px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px] pt-[100px] pb-[40px] flex justify-center">
      <div className="flex flex-col max-w-[1190px] w-full">
        <div className="flex flex-col gap-2">
          <span className="text-[22px] font-semibold text-lightGreen">
            OUR TEAM
          </span>
          <span className="flex flex-col text-[68px] leading-[74px] font-semibold text-primaryText">
            Behind of
            <span className="text-lightGreen"> Raynex Power Solution</span>
          </span>
        </div>
        <div className="mt-8 flex flex-col gap-8">
          <div className="p-8 gap-6 border border-lightGreen/50 flex flex-col md:flex-row items-center md:items-start w-full">
            <div className="border border-lightGreen  h-[300px] w-[260px] min-h-[300px] min-w-[260px] relative">
              <CustomImagePreview image={yagnesh} />
            </div>
            <div className="w-full flex flex-col gap-6 items-center">
              <span className="text-2xl font-bold text-primaryText">
                Mr. Yagnesh Thummar (Visionary Leader | Co-Founder & Director)
              </span>
              <span className="text-lg text-common-black ">
                With a passion for renewable energy and a strong background in
                solar EPC solutions, Mr. Yagnesh co-founded Raynex Power
                Solution Private Limited with a mission to revolutionize the
                clean energy sector. His expertise in project execution,
                strategic planning, and business development has been
                instrumental in driving Raynex to become one of the leading
                solar EPC providers for ground-mounted projects. His vision is
                to empower businesses and individuals with sustainable energy
                solutions that make a lasting impact.
              </span>
            </div>
          </div>
          <div className="p-8 gap-6 border border-lightGreen/50 flex flex-col md:flex-row items-center md:items-start w-full">
            <div className="w-full flex flex-col gap-6 items-center">
              <span className="text-2xl font-bold text-primaryText">
                Mr. Ankit Limbasiya (Technical Expert | Co-Founder & Director)
              </span>
              <span className="text-lg text-common-black ">
                Bringing years of technical excellence and industry experience,
                Mr. Ankit is the driving force behind Raynex’s engineering and
                innovation. His deep understanding of solar technology, system
                design, and project management ensures that every installation
                meets the highest standards of efficiency and reliability. With
                a customer-first approach, he is dedicated to delivering
                customized solar solutions that maximize performance and
                long-term savings.
              </span>
            </div>
            <div className="border border-lightGreen  h-[300px] w-[260px] min-h-[300px] min-w-[260px] relative">
              <CustomImagePreview image={ankit} />
            </div>
          </div>
          {/* <div className="p-8 gap-6 border border-lightGreen/50 flex flex-col md:flex-row items-center md:items-start w-full">
            <div className="border border-lightGreen h-[300px] w-[260px] min-h-[300px] min-w-[260px]"></div>
            <div className="w-full flex flex-col gap-6 items-center">
              <span className="text-2xl font-bold text-primaryText">
                Name_3
              </span>
              <span className="text-lg text-common-black ">
                [Director's Name] is a visionary leader and renewable energy
                expert with [X years] of experience in the energy sector. Under
                their leadership, Raynex Power Solution has become a key player
                in delivering innovative and sustainable energy solutions.
                Passionate about driving clean energy adoption, they have
                spearheaded numerous large-scale solar and wind projects,
                fostering sustainable development and energy independence.
                Committed to excellence and innovation, [Director's Name] is
                dedicated to creating a greener, carbon- neutral future through
                cutting-edge renewable energy initiatives.{" "}
              </span>
            </div>
          </div> */}
        </div>
        <div className="mt-[100px] flex flex-col gap-4">
          <div className="text-2xl font-semibold text-primaryText">
            Raynex Frontliners
          </div>
          <div className="flex gap-8 justify-center w-full flex-wrap">
            <div className="flex flex-col gap-1">
              <div className="border border-lightGreen w-[270px] h-[300px] relative ">
                <CustomImagePreview image={harpal} style="object-cover" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl text-primaryText font-bold">
                  Mr. Harpal Jadav
                </span>
                <span className="text-base font-semibold text-lightGreen ">
                  HR & Accountant
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="border border-lightGreen w-[270px] h-[300px] relative">
                {" "}
                <CustomImagePreview image={meet} style="object-cover" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl text-primaryText font-bold">
                  ⁠Mr. Meet Hirpara
                </span>
                <span className="text-base font-semibold text-lightGreen ">
                  BDA
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="border border-lightGreen w-[270px] h-[300px] relative ">
                <CustomImagePreview image={mitul} style="object-cover" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl text-primaryText font-bold">
                  Mr. Mitul Rajpara
                </span>
                <span className="text-base font-semibold text-lightGreen ">
                  Deputy General Manager of Sales
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
