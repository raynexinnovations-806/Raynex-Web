import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export const CustomImagePreview = ({
  image,
  style,
}: {
  image: string | StaticImageData;
  style?: string;
}) => {
  const [isImgLoad, setIsImgLoad] = useState(false);

  return (
    <Image
      onLoad={() => setIsImgLoad(true)}
      fill
      priority={true}
      src={image}
      alt=""
      className={`${
        isImgLoad ? "opacity-1" : "opacity-0"
      } transition-all duration-500  ${style}`}
    />
  );
};
