import * as React from 'react';
import type { SVGProps } from 'react';
const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M21.649 19.875c-1.428-2.468-3.628-4.238-6.196-5.078a6.75 6.75 0 1 0-6.906 0c-2.567.839-4.768 2.609-6.196 5.078a.75.75 0 1 0 1.299.75C5.416 17.573 8.538 15.75 12 15.75s6.584 1.823 8.35 4.875a.751.751 0 1 0 1.299-.75M6.75 9a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0"
    />
  </svg>
);
export default SvgProfile;
