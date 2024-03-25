import { memo, SVGProps } from 'react';

const Vector3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 230 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.182516 0.442078L229.16 0.262782' stroke='#D4E3F0' strokeOpacity={0.31} strokeWidth={0.695079} />
  </svg>
);

const Memo = memo(Vector3Icon);
export { Memo as Vector3Icon };
