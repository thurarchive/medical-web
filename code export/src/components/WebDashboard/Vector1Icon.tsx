import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 288 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.00930405 0.125366L287.123 0.0406618' stroke='#EEF5FB' strokeOpacity={0.4} strokeWidth={0.695079} />
  </svg>
);

const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
