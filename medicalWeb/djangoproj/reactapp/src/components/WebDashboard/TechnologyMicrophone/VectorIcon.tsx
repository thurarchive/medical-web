import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.5 4V6.5C0.5 9.26142 2.73858 11.5 5.5 11.5M10.5 4V6.5C10.5 9.26143 8.26142 11.5 5.5 11.5M5.5 11.5V15M3 14.5H8M7.5 2.5V6.5C7.5 7.60457 6.60457 8.5 5.5 8.5C4.39543 8.5 3.5 7.60457 3.5 6.5V2.5C3.5 1.39543 4.39543 0.500001 5.5 0.500001C6.60457 0.500001 7.5 1.39543 7.5 2.5Z'
      stroke='#1D1929'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
