import React from "react";
type Props = {
  innerColor: string;
  outerColor: string;
};
const LinkedinIcon = ({ innerColor, outerColor }: Props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.0507812 16C0.0507812 7.16344 7.20286 0 16.0254 0C24.8479 0 32 7.16344 32 16C32 24.8366 24.8479 32 16.0254 32C7.20286 32 0.0507812 24.8366 0.0507812 16Z"
        fill={outerColor}
      />
      <path
        d="M21.1848 23.3333H24.6783V16.1903C24.6783 12.6625 22.5718 11.4592 20.6224 11.4592C18.8199 11.4592 17.5954 12.673 17.2574 13.3841V11.7838H13.8976V23.3333H17.3911V17.0716C17.3911 15.402 18.4073 14.59 19.4439 14.59C20.4244 14.59 21.1848 15.164 21.1848 17.0252V23.3333Z"
        fill={innerColor}
      />
      <path
        d="M8.03809 8.08776C8.03809 9.29353 8.93982 10.1747 10.0522 10.1747C11.1646 10.1747 12.0664 9.29353 12.0664 8.08776C12.0664 6.88216 11.1646 6 10.0522 6C8.93982 6 8.03809 6.88216 8.03809 8.08776Z"
        fill={innerColor}
      />
      <path
        d="M8.30548 23.3244H11.7988V11.7749H8.30548V23.3244Z"
        fill={innerColor}
      />
    </svg>
  );
};

export default LinkedinIcon;
