import { socialMedia } from "@/utils/constants/appConstant";
import CallIcon from "@/utils/icons/common/CallIcon";
import FacebookIcon from "@/utils/icons/common/FacebookIcon";
import InstagramIcon from "@/utils/icons/common/InstagramIcon";
import LinkedinIcon from "@/utils/icons/common/LinkedinIcon";
import MailIcon from "@/utils/icons/common/MailIcon";
import TwitterIcon from "@/utils/icons/common/TwitterIcon";
import React from "react";

const ContactBar = () => {
  return (
    <div
      className=" bg-primaryText w-full flex  justify-center px-[50px] lg:px-[90px] xl:px-[130px] py-3"
      id="pageTop"
    >
      <div className="flex flex-col md:flex-row max-w-[1190px] w-full  md:justify-between gap-4 md:gap-0 items-center">
        <div className="flex flex-col sm:flex-row gap-5">
          <div
            className="flex gap-3 items-center sm:border-r border-common-white pr-[16px] md:pr-[21px] cursor-pointer"
            onClick={() => {
              window.location.href = "tel:+919408968688";
            }}
          >
            <div className="text-lightGreen md:scale-[0.85]">
              <CallIcon />
            </div>
            <div className="text-base md:text-lg font-semibold text-common-white/80 ">
              +91 94089 68688
            </div>
          </div>
          <div
            className="flex items-center sm:pl-[16px] md:pl-[21px] gap-3 cursor-pointer"
            onClick={() => {
              window.location.href = "mailto:info@raynexps.com";
            }}
          >
            <div className="text-lightGreen scale-90">
              <MailIcon />
            </div>
            <div className="text-base md:text-lg font-semibold text-common-white/80">
              info@raynexps.com
            </div>
          </div>
        </div>
        <div className="flex gap-5 lg:gap-[30px]">
          <div
            className="cursor-pointer scale-90"
            onClick={() => window.open(socialMedia.facebook, "_blank")}
          >
            <FacebookIcon innerColor="#002D38" outerColor="#ffffff80" />
          </div>
          {/* <div
            className="cursor-pointer scale-90"
            onClick={() => window.open("#", "_blank")}
          >
            <TwitterIcon innerColor="#002D38" outerColor="#ffffff80" />
          </div> */}
          <div
            className="cursor-pointer scale-90"
            onClick={() => window.open(socialMedia.instagram, "_blank")}
          >
            <InstagramIcon innerColor="#002D38" outerColor="#ffffff80" />
          </div>
          <div
            className="cursor-pointer scale-90"
            onClick={() => window.open(socialMedia.linkedin, "_blank")}
          >
            <LinkedinIcon innerColor="#002D38" outerColor="#ffffff80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
