import React from "react";
import { CustomImagePreview } from "./CustomImagePreview";
import { FooterImage } from "@/utils/images/common";
import RaynexLogoWithWhiteText from "@/utils/icons/common/RaynexLogoWithWhiteText";
import MailIcon from "@/utils/icons/common/MailIcon";
import CallIcon from "@/utils/icons/common/CallIcon";
import LocationIcon from "@/utils/icons/common/LocationIcon";
import FacebookIcon from "@/utils/icons/common/FacebookIcon";
import InstagramIcon from "@/utils/icons/common/InstagramIcon";
import TwitterIcon from "@/utils/icons/common/TwitterIcon";
import LinkedinIcon from "@/utils/icons/common/LinkedinIcon";
import { path, socialMedia } from "@/utils/constants/appConstant";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const handleNavigation = (item: any) => {
    router.push(path.whySolar);
    if (!item.startsWith("#")) {
      // Navigate to a different route
      if (item) {
        router.push(item).then(() => {
          const element = document.getElementById("pageTop");
          if (element) {
            element.scrollIntoView({ behavior: "instant" });
          }
        }); // Redirect to the route in the same tab
      }
    } else {
      const targetId = item.slice(1); // Extract the ID (remove '#')
      if (router.pathname !== "/") {
        // If not on the home page, navigate to home first
        router.push("/").then(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        });
      } else {
        // If already on the home page, scroll directly
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className="flex flex-col relative h-full w-full">
      <div className="absolute w-full h-full">
        <CustomImagePreview image={FooterImage} style="object-cover" />
      </div>
      <div className="pt-[125px] px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px]  z-20  ">
        <div className=" flex flex-col md:flex-row items-center gap-20 border-b border-common-white/40 pb-10 justify-center">
          <div className="flex flex-col gap-10 max-w-[500px]">
            <div className="">
              <RaynexLogoWithWhiteText />
            </div>
            <div className="flex flex-col gap-8">
              <div className="text-xl xl:text-2xl font-semibold text-common-white">
                Raynex Power Solution Private Limited Professional Service and
                Quality Products.
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-lightGreen">
                  <MailIcon />
                </div>
                <div className="text-lg font-semibold text-common-white">
                  info@raynexps.com
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-lightGreen">
                  <CallIcon />
                </div>
                <div className="text-lg font-semibold text-common-white">
                  +91 94089 68688
                </div>
              </div>
              <div className="flex gap-2 items-top">
                <div className="scale-75">
                  <LocationIcon />
                </div>
                <div className="text-lg font-semibold text-common-white">
                  806, Sarthana Business Hub, Sarthana-Jakatnaka, Surat ,
                  Gujarat - 395006
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10 xl:gap-14 pt-5 ">
            <div className="flex flex-col text-common-white gap-5">
              <span className="text-2xl xl:text-[28px] font-bold text-common-white border-b border-lightGreen pb-1">
                About Us
              </span>
              <div className="flex flex-col gap-2">
                <span
                  className="text-xl font-semibold text-common-white cursor-pointer"
                  onClick={() => {
                    handleNavigation(path.home);
                  }}
                >
                  Home
                </span>
                <span
                  className="text-xl font-semibold text-common-white cursor-pointer"
                  onClick={() => {
                    handleNavigation(path.aboutUs);
                  }}
                >
                  About Us
                </span>
                <span
                  className="text-xl font-semibold text-common-white cursor-pointer"
                  onClick={() => {
                    handleNavigation("#servicesComponent");
                  }}
                >
                  Service
                </span>
                <span
                  className="text-xl font-semibold text-common-white cursor-pointer"
                  onClick={() => {
                    handleNavigation("#contactUsComponent");
                  }}
                >
                  Contact
                </span>
              </div>
            </div>
            {/* <div className="flex flex-col text-common-white gap-5">
              <span className="text-2xl xl:text-[28px] font-bold text-common-white border-b border-lightGreen pb-1">
                Support
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-xl font-semibold text-common-white">
                  FAQs
                </span>
                <span className="text-xl font-semibold text-common-white">
                  Customers Service
                </span>
                <span className="text-xl font-semibold text-common-white">
                  Help{" "}
                </span>
              </div>
            </div> */}
            <div className="flex flex-col text-common-white gap-5">
              <span className="text-2xl xl:text-[28px] font-bold text-common-white border-b border-lightGreen pb-1">
                Follow Us
              </span>
              <div className="flex flex-col gap-4 items-center">
                <span
                  className="cursor-pointer"
                  onClick={() => window.open(socialMedia.facebook, "_blank")}
                >
                  <FacebookIcon innerColor="white" outerColor="#00AD93" />
                </span>

                {/* <span
                  className="cursor-pointer"
                  onClick={() => window.open("#", "_blank")}
                >
                  <TwitterIcon innerColor="white" outerColor="#00AD93" />
                </span> */}
                <span
                  className="cursor-pointer"
                  onClick={() => window.open(socialMedia.instagram, "_blank")}
                >
                  <InstagramIcon innerColor="white" outerColor="#00AD93" />
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => window.open(socialMedia.linkedin, "_blank")}
                >
                  <LinkedinIcon innerColor="white" outerColor="#00AD93" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="text-base text-common-white text-center">
            Copyright © 2022 Raynex Power Solution Private Limited
          </div>
          {/* <div className="flex gap-7 text-base text-common-white">
            <span className="cursor-pointer hover:underline">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:underline">Disclaimer</span>
            <span className="cursor-pointer hover:underline">
              Terms & Conditions
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
