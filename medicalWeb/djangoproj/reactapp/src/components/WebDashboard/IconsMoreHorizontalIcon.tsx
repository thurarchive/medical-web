import { memo, SVGProps } from 'react';

const IconsMoreHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.2}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.4616 12.133C13.1592 12.133 12.1022 13.19 12.1022 14.4924C12.1022 15.7948 13.1592 16.8519 14.4616 16.8519C15.7641 16.8519 16.8211 15.7948 16.8211 14.4924C16.8211 13.19 15.7641 12.133 14.4616 12.133ZM22.7205 12.133C21.4181 12.133 20.361 13.19 20.361 14.4924C20.361 15.7948 21.4181 16.8519 22.7205 16.8519C24.0229 16.8519 25.0799 15.7948 25.0799 14.4924C25.0799 13.19 24.0229 12.133 22.7205 12.133ZM3.84402 14.4925C3.84402 13.19 4.90105 12.133 6.20347 12.133C7.50588 12.133 8.56291 13.19 8.56291 14.4925C8.56291 15.7949 7.50588 16.8519 6.20347 16.8519C4.90105 16.8519 3.84402 15.7949 3.84402 14.4925Z'
        fill='white'
      />
    </g>
  </svg>
);

const Memo = memo(IconsMoreHorizontalIcon);
export { Memo as IconsMoreHorizontalIcon };
