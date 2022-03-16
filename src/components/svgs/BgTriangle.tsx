import * as React from 'react';
import { SVGProps } from 'react';

const SvgBgTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={305} height={277} {...props}>
    <path
      fill='none'
      stroke='#000'
      strokeWidth={15}
      d='M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z'
      opacity={0.2}
    />
  </svg>
);

export default SvgBgTriangle;
