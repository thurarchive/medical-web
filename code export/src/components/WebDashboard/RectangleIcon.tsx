import { memo, SVGProps } from 'react';

const RectangleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.878147 0.360407H9.28546L5.0818 6.44935L0.878147 0.360407Z'
      fill='#CCDDE2'
    />
  </svg>
);

const Memo = memo(RectangleIcon);
export { Memo as RectangleIcon };
