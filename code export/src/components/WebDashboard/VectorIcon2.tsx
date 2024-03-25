import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.0788 10.0787L7.29847 7.29834M4.51816 8.6885C2.21487 8.6885 0.347679 6.82131 0.347679 4.51802C0.347679 2.21473 2.21487 0.347543 4.51816 0.347543C6.82145 0.347543 8.68863 2.21473 8.68863 4.51802C8.68863 6.82131 6.82145 8.6885 4.51816 8.6885Z'
      stroke='white'
      strokeWidth={0.695079}
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
