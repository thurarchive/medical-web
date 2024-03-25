import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.95202 13.2736C8.04186 13.3653 8.16419 13.4163 8.29226 13.4163C8.42033 13.4163 8.54266 13.3653 8.6325 13.2736L14.7454 7.07979C17.2946 4.49739 15.4832 0.036027 11.8578 0.036027C9.68062 0.036027 8.68156 1.63593 8.29226 1.93475C7.90105 1.63465 6.90836 0.036027 4.72673 0.036027C1.11278 0.036027 -0.720951 4.48593 1.83978 7.07979L7.95202 13.2736Z'
      fill='#BDC2F7'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
