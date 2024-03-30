import { memo, SVGProps } from 'react';

const LineIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.600214}
      d='M1.04964 0.975883V17.4852'
      stroke='#D4E3F0'
      strokeWidth={0.695079}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(LineIcon3);
export { Memo as LineIcon3 };
