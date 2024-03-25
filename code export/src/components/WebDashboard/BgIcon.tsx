import { memo, SVGProps } from 'react';

const BgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 327 1040' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.7196 9.29073C0.723085 4.30027 4.77148 0.251585 9.76194 0.247677L326.032 2.8974e-05L325.306 1039.18L9.03627 1039.43C4.04581 1039.43 0.00304856 1035.39 0.00653353 1030.4L0.7196 9.29073Z'
      fill='white'
      fillOpacity={0.06}
    />
  </svg>
);

const Memo = memo(BgIcon);
export { Memo as BgIcon };
