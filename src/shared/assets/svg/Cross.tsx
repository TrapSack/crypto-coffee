import { SVGProps } from "react";

export const Cross = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.25 0.75L0.75 7.25M0.75 0.75L7.25 7.25"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
