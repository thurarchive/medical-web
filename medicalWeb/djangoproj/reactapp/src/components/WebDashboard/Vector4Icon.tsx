import { memo, SVGProps } from 'react';

const Vector4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 278 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.716452 1.04309L277.929 0.949715' stroke='#D4E3F0' strokeOpacity={0.38} strokeWidth={0.695079} />
  </svg>
);

const Memo = memo(Vector4Icon);
export { Memo as Vector4Icon };
