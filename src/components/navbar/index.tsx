import RaynexLogoWithText from "@/utils/icons/common/RaynexLogoWithText";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import CloseIcon from "@/utils/icons/common/CloseIcon";
import DrawerIcon from "@/utils/icons/common/DrawerIcon";
import { useRouter } from "next/router";
import { path } from "@/utils/constants/appConstant";
import RaynexLogoWithWhiteText from "@/utils/icons/common/RaynexLogoWithWhiteText";
import RaynexSmallWhiteIcon from "@/utils/icons/common/RaynexSmallWhiteIcon";

type Props = {
  isNavbarExtended: boolean;
  setIsNavbarExtended: Dispatch<SetStateAction<boolean>>;
  isScrolled: boolean;
};

const navBarItems = [
  {
    name: "Home",
    path: path.home,
  },
  {
    name: "Why Solar?",
    path: path.whySolar,
  },
  {
    name: "Services",
    path: "#servicesComponent",
  },
  {
    name: "About Us",
    path: path.aboutUs,
  },
  {
    name: "Contact Us",
    path: "#contactUsComponent",
  },
];

const Navbar = ({
  isNavbarExtended,
  setIsNavbarExtended,
  isScrolled,
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  const handleNavigation = (item: any) => {
    router.push(path.whySolar);
    if (!item.path.startsWith("#")) {
      // Navigate to a different route
      if (item.path) {
        router.push(item.path).then(() => {
          const element = document.getElementById("pageTop");
          if (element) {
            element.scrollIntoView({ behavior: "instant" });
          }
        }); // Redirect to the route in the same tab
      }
    } else {
      const targetId = item.path.slice(1); // Extract the ID (remove '#')
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
    <div
      className={`flex w-full absolute z-40  px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px] items-center justify-center ${
        isScrolled
          ? path.contactUs !== router.pathname
            ? "bg-common-white py-3"
            : "bg-primaryText py-3"
          : "py-6"
      }`}
    >
      {/* Navbar Header */}
      <div className="flex justify-between w-full items-center max-w-[1190px]">
        <div
          className="scale-90 cursor-pointer"
          onClick={() => router.push("/")}
        >
          {path.contactUs !== router.pathname ? (
            <RaynexLogoWithText />
          ) : (
            <RaynexSmallWhiteIcon />
          )}
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 xl:gap-10 items-center">
          {navBarItems.map((item) => (
            <span
              key={item.name}
              className={`text-lg font-bold ${
                path.contactUs === router.pathname
                  ? "text-common-white"
                  : "text-common-black"
              } hover:underline hover:text-lightGreen cursor-pointer ${
                item.path === router.pathname && "text-lightGreen "
              }`}
              onClick={() => handleNavigation(item)}
            >
              {item.name}
            </span>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block">
          <button
            className="py-2 px-3 bg-lightGreen text-common-white text-lg font-semibold"
            onClick={() => router.push(path.contactUs)}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="flex lg:hidden cursor-pointer items-center z-[400] text-common-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <DrawerIcon />}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-common-black bg-opacity-75 z-50 flex flex-col items-center p-6 pt-16">
          {navBarItems.map((item) => (
            <div
              key={item.name}
              className={`w-full border-b border-black-600 py-4 text-center text-lg font-bold text-common-white hover:text-lightGreen cursor-pointer  ${
                item.path === router.pathname && "text-lightGreen "
              }`}
              onClick={() => handleNavigation(item)}
            >
              {item.name}
            </div>
          ))}
          <button
            className="w-fit mt-6 py-2 px-3 bg-lightGreen text-common-white text-lg font-semibold"
            onClick={() => router.push(path.contactUs)}
          >
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
