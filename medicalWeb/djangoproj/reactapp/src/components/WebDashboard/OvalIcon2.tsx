import { memo, SVGProps } from 'react';

const OvalIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={2.42188} cy={2.97835} rx={1.86829} ry={2.02965} fill='#F3C294' />
  </svg>
);

const Memo = memo(OvalIcon2);
export { Memo as OvalIcon2 };
