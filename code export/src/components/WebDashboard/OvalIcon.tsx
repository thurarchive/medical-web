import { memo, SVGProps } from 'react';

const OvalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={2.6242} cy={2.97835} rx={1.86829} ry={2.02965} fill='#71DDB1' />
  </svg>
);

const Memo = memo(OvalIcon);
export { Memo as OvalIcon };
