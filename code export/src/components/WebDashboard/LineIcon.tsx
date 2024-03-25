import { memo, SVGProps } from 'react';

const LineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 71' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.600214}
      d='M1.0153 3.2153e-05V70.1057'
      stroke='white'
      strokeWidth={0.695079}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(LineIcon);
export { Memo as LineIcon };
