import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStatusDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={6}
    fill="none"
    {...props}
  >
    <circle cx={3} cy={3} r={3} fill="currentColor" />
  </svg>
);
export default SvgStatusDot;
