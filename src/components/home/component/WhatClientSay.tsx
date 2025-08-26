import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import Splide CSS
import { CustomImagePreview } from "@/components/shared/CustomImagePreview";
import DoubleQuotes from "@/utils/icons/common/DoubleQuotes";
import StarRatting from "@/utils/icons/common/StarRatting";
import {
  clientReview1,
  clientReview2,
  clientReview3,
  clientReview4,
  clientReview5,
  clientReview6,
} from "@/utils/images/clientreview";
import { WhatClientSayImage } from "@/utils/images/landingpage";

const reviews = [
  {
    image: clientReview1,
    text: "Raynex handled our project perfectly. Timely completion, durable structure, and efficient documentation. Their service team is responsive and supportive. Excellent work!",
    author: "Sarthi Hostel",
    role: "CEO",
  },
  {
    image: clientReview2,
    text: "Professionalism at its best! Raynex completed our project on time with precise engineering, smooth documentation, and great after-sales service. Highly satisfied!",
    author: "Mayank Fabrics",
    role: "CEO",
  },
  {
    image: clientReview3,
    text: "Raynex did a fantastic job on our project. Excellent engineering, timely execution, and a strong structure. The service team is always available, making them a reliable partner!",
    author: "Crystal Industries",
    role: "CEO",
  },
  {
    image: clientReview4,
    text: "Raynex Power Solution delivered exceptional engineering and completed our project on time. The structure is sturdy, and the document process was seamless. Their excellent service ensures our system runs smoothly. Highly recommended!",
    author: "Ganesh Jari Covering",
    role: "CEO",
  },
  {
    image: clientReview5,
    text: "Our solar project was completed on schedule with outstanding engineering and quality. The document process was smooth, and their prompt service is impressive. Great experience with Raynex!",
    author: "Raj Industries",
    role: "CEO",
  },
  {
    image: clientReview6,
    text: "Our project was completed flawlessly by Raynex. Great engineering, timely delivery, and smooth processes. Their after-installation service is outstanding. Highly recommend them!",
    author: "Ramkrushna Vidhyabhavan",
    role: "CEO",
  },
];

const WhatClientSay = () => {
  return (
    <div className="flex flex-col relative">
      <div className="absolute w-full h-full">
        <CustomImagePreview image={WhatClientSayImage} style="object-cover" />
      </div>
      <div className="z-20 py-[100px] px-[25px] sm:px-[50px] md:px-[90px] xl:px-[125px] flex justify-center">
        <div className="flex flex-col items-center w-full gap-16 max-w-[1190px]">
          <div className="flex flex-col items-center">
            <div className="text-2xl text-common-white font-semibold">
              Clients Feedback
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[68px] font-semibold text-common-white">
                What Our Clients Say
              </span>
              <span className="text-xl text-center text-common-white max-w-[818px] mt-3">
                Our clients trust us for reliable, high-quality solar solutions
                that exceed their expectations. Hear their stories of success
                and satisfaction.
              </span>
              <span className="w-[111px] border-b border-lightGreen mt-3"></span>
            </div>
          </div>

          {/* Splide Slider */}
          <Splide
            options={{
              type: "loop",
              autoplay: true,
              interval: 3000,
              arrows: false, // Disables next/previous buttons
              pagination: false, // Disables pagination dots
              perPage: 3,
              breakpoints: {
                1024: { perPage: 2 },
                640: { perPage: 1 },
              },
              gap: "1rem",
            }}
            className="w-full"
          >
            {reviews.map((review, index) => (
              <SplideSlide key={index}>
                <div className="flex flex-col px-7 bg-common-white items-center w-full max-w-[600px] pb-7 mt-14 min-h-[400px]">
                  <div className="relative pb-7 w-full flex justify-center">
                    <div className="absolute h-[100px] w-[100px] rounded-full -mt-14 overflow-hidden">
                      <CustomImagePreview image={review.image} />
                    </div>
                  </div>
                  <div className="absolute bottom-10 right-0 scale-75">
                    <DoubleQuotes />
                  </div>
                  <div className="mt-6">
                    <StarRatting />
                  </div>
                  <div className="text-xl text-common-black/80 text-center mt-4">
                    {review.text}
                  </div>
                  <div className="flex flex-col mt-4 gap-3 items-center text-center">
                    <span className="text-2xl font-bold text-common-black/80">
                      {review.author}
                    </span>
                    {/* <span className="text-xl font-semibold text-lightGreen">
                      {review.role}
                    </span> */}
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default WhatClientSay;
