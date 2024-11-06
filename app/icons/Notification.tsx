import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.98 2.283Q14 2.144 14 2a2 2 0 1 0-3.98.283 7.04 7.04 0 0 0-4.938 5.442l-1.021 5.36a.3.3 0 0 1-.035.089l-2.002 3.254C.794 18.427 2.232 21 4.579 21h4.42a3 3 0 1 0 6 0h4.422c2.347 0 3.785-2.573 2.555-4.572l-2.003-3.254a.3.3 0 0 1-.034-.09l-1.021-5.36a7.04 7.04 0 0 0-4.938-5.44M12 4C9.579 4 7.5 5.72 7.047 8.099l-1.021 5.36c-.052.27-.152.529-.296.763l-2.003 3.254A1 1 0 0 0 4.58 19H19.42a1 1 0 0 0 .851-1.524l-2.002-3.254a2.3 2.3 0 0 1-.296-.763l-1.021-5.36A5.04 5.04 0 0 0 12 4m0 18a1 1 0 0 0 1-1h-2a1 1 0 0 0 1 1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNotification;
