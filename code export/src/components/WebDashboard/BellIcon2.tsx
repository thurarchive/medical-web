import { memo, SVGProps } from 'react';

const BellIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.3101 4.17788C9.04988 4.17788 7.84132 4.7392 6.95024 5.73836C6.05916 6.73753 5.55855 8.09268 5.55855 9.5057L5.55855 12.69L4.99867 13.3178C4.88795 13.4419 4.81255 13.6002 4.78201 13.7724C4.75147 13.9446 4.76715 14.1231 4.82707 14.2853C4.887 14.4476 4.98848 14.5862 5.11867 14.6838C5.24887 14.7814 5.40195 14.8335 5.55855 14.8335L15.0616 14.8335C15.2182 14.8335 15.3712 14.7814 15.5014 14.6838C15.6316 14.5862 15.7331 14.4476 15.793 14.2853C15.853 14.1231 15.8687 13.9446 15.8381 13.7724C15.8076 13.6002 15.7322 13.4419 15.6215 13.3178L15.0616 12.69L15.0616 9.5057C15.0616 8.09268 14.561 6.73753 13.6699 5.73836C12.7788 4.7392 11.5702 4.17788 10.3101 4.17788V4.17788ZM10.3101 18.3854C9.67997 18.3854 9.07569 18.1048 8.63015 17.6052C8.18461 17.1056 7.93431 16.428 7.93431 15.7215L12.6858 15.7215C12.6858 16.428 12.4355 17.1056 11.99 17.6052C11.5444 18.1048 10.9402 18.3854 10.3101 18.3854Z'
      fill='#1A4FBA'
    />
  </svg>
);

const Memo = memo(BellIcon2);
export { Memo as BellIcon2 };