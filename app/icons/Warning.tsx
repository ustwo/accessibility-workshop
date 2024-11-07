import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#DD0F00"
      d="M14.8 12.256 9.334 2.764a1.548 1.548 0 0 0-2.668 0L1.2 12.256a1.47 1.47 0 0 0 0 1.482 1.52 1.52 0 0 0 1.334.762h10.932a1.52 1.52 0 0 0 1.333-.762 1.47 1.47 0 0 0 0-1.482M7.5 7a.5.5 0 0 1 1 0v2.5a.5.5 0 1 1-1 0zm.5 5.5a.75.75 0 1 1 0-1.499.75.75 0 0 1 0 1.499"
    />
  </svg>
);
export default SvgWarning;
