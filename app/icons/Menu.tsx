import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#1B281B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 12h18M3 6h18M3 18h18"
    />
  </svg>
);
export default SvgMenu;
