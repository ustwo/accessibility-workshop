import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      clipPath="url(#mute_svg__a)"
    >
      <path d="M10 21H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h6l9-7v24zM9.998 11v10" />
    </g>
    <defs>
      <clipPath id="mute_svg__a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMute;
