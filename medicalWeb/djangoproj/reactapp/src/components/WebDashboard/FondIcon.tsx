import { memo, SVGProps } from 'react';

const FondIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1045_4380)'>
      <circle cx={6.04279} cy={6.29136} r={5.32294} fill='#FF0000' />
    </g>
    <defs>
      <clipPath id='clip0_1045_4380'>
        <rect width={11.2048} height={11.2048} fill='white' transform='translate(0.719854 0.968421)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FondIcon);
export { Memo as FondIcon };
