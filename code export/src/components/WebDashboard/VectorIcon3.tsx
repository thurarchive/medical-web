import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.737528 2.7803V4.518C0.737528 6.43741 2.29352 7.99339 4.21292 7.99339M7.68832 2.7803V4.518C7.68832 6.43741 6.13233 7.99339 4.21292 7.99339M4.21292 7.99339V10.4262M2.47523 10.0786H5.95062M5.60308 1.73768V4.518C5.60308 5.28576 4.98069 5.90816 4.21292 5.90816C3.44516 5.90816 2.82277 5.28576 2.82277 4.518V1.73768C2.82277 0.969916 3.44516 0.347521 4.21292 0.347521C4.98069 0.347521 5.60308 0.969916 5.60308 1.73768Z'
      stroke='white'
      strokeWidth={0.695079}
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
