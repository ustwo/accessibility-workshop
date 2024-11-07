import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#home_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.346 3.186a1 1 0 0 1 1.308 0L19 8.666V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8.667zM3 10.394l-1.346 1.163a1 1 0 1 1-1.308-1.514l9.693-8.37a3 3 0 0 1 3.922 0l9.693 8.37a1 1 0 1 1-1.308 1.514L21 10.394V19a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM10 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6h-4z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="home_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHome;
