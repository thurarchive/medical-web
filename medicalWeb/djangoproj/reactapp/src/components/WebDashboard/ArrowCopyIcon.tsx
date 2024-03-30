import { memo, SVGProps } from 'react';

const ArrowCopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.911486 0.880353L3.81999 3.96991C3.94242 4.10009 4.14022 4.10009 4.26297 3.96991L7.17147 0.880353C7.3486 0.692429 7.3486 0.386678 7.17147 0.19842C6.99434 0.0104961 6.70686 0.0104961 6.52973 0.19842L4.04132 2.84137L1.55354 0.19842C1.3761 0.0104961 1.08862 0.0104961 0.911486 0.19842C0.734356 0.386678 0.734356 0.692429 0.911486 0.880353'
      fill='white'
    />
  </svg>
);

const Memo = memo(ArrowCopyIcon);
export { Memo as ArrowCopyIcon };
