import { memo, SVGProps } from 'react';

const DownArrowIconIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.08632 10.5448C0.761276 10.3029 0.761276 9.9108 1.08632 9.66894L6.49053 5.64778L1.08632 1.62662C0.761276 1.38476 0.761276 0.992633 1.08632 0.750775C1.41136 0.508917 1.93836 0.508917 2.26341 0.750775L7.78533 4.85952C8.37041 5.29487 8.37041 6.0007 7.78533 6.43604L2.26341 10.5448C1.93836 10.7866 1.41136 10.7866 1.08632 10.5448Z'
      fill='#71DDB1'
    />
  </svg>
);

const Memo = memo(DownArrowIconIcon);
export { Memo as DownArrowIconIcon };
