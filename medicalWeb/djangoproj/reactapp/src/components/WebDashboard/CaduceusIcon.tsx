import { memo, SVGProps } from 'react';

const CaduceusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.9135 1.09555H19.7882C19.7882 1.09555 19.9736 6.45089 14.9135 6.45089C13.9732 6.45089 13.1428 6.0017 12.6392 5.31488C12.4382 5.04043 12.03 5.00562 11.7859 5.24527L10.7406 6.27014V9.73572L9.34956 10.1742V2.92305C8.93433 2.69144 8.65408 2.26034 8.65408 1.76495C8.65408 1.00183 9.31757 0.387298 10.1209 0.428137C10.8393 0.464283 11.4207 1.04333 11.436 1.73551C11.4472 2.24292 11.1641 2.68674 10.7406 2.92305V4.047L12.8361 1.9919V1.99323C13.3459 1.44231 14.0872 1.09555 14.9135 1.09555ZM7.4441 5.29812C7.6462 5.02264 8.05672 4.98838 8.30221 5.22824L8.65399 5.57292V3.3416L7.24621 1.96357V1.96423C6.73358 1.41196 5.98807 1.06392 5.15729 1.06392H0.255574C0.255574 1.06392 0.550702 6.43897 5.15729 6.43897C6.10277 6.43897 6.93779 5.98813 7.4441 5.29812ZM7.87514 10.6696L7.86743 10.6723C7.2796 10.8636 6.7619 11.1281 6.32751 11.4496C5.4076 10.7501 5.25697 9.94458 5.25697 9.49347C5.25697 8.85508 5.40691 8.24756 6.10962 7.66623C6.84455 7.04127 7.80087 7.00434 8.1505 7.55346C8.47207 8.05826 8.15749 8.86515 7.44846 9.35653C7.20187 9.52703 6.94051 9.63579 6.69043 9.68546C6.77729 9.95465 7.04142 10.2285 7.44427 10.4595C7.58647 10.5407 7.70207 10.6004 7.87514 10.6696ZM11.9842 7.84435C12.3202 7.17821 13.24 7.22458 13.9457 7.98098C14.6218 8.68534 14.7652 9.42141 14.7672 10.1957C14.7672 10.8204 14.5787 12.0054 13.3134 12.9188C13.0246 13.127 12.8071 13.2531 12.3747 13.4409C13.2999 14.0054 13.8353 14.8968 13.8353 15.9143C13.8353 17.3873 12.8212 18.2291 11.6751 18.7293C12.2421 19.2197 12.5411 19.8598 12.5411 20.5194C12.5411 20.948 12.4966 21.3978 11.9243 21.9216L11.9236 21.9208C11.8899 21.9533 11.8482 21.9737 11.8017 21.9737C11.694 21.9737 11.6064 21.8679 11.6064 21.7378C11.6064 21.6947 11.6165 21.6548 11.6334 21.6199L11.6327 21.6191C12.0657 20.7415 11.5788 20.1876 10.8051 19.7956V21.1595C10.8051 21.6085 10.5035 21.9729 10.1317 21.9729C9.76007 21.9729 9.45839 21.6085 9.45839 21.1595V19.7947C8.65305 20.203 8.23827 20.6748 8.62882 21.6191C8.64564 21.654 8.65574 21.6939 8.65574 21.737C8.65574 21.8671 8.5682 21.9729 8.46045 21.9729C8.41402 21.9729 8.37158 21.9525 8.33791 21.92L8.33724 21.9208C7.74604 21.4198 7.70696 20.9155 7.70696 20.5088C7.70696 19.8004 8.01136 19.1977 8.57764 18.7236C8.84935 18.4972 9.01553 18.4082 9.70032 18.0415L9.70068 18.0413L9.70272 18.0402C9.82683 17.9737 9.96794 17.8981 10.1297 17.811C10.3752 17.6787 10.5971 17.5613 10.7975 17.4552L10.7978 17.4551C12.0941 16.7691 12.4865 16.5614 12.4865 15.9127C12.4865 15.6036 12.1216 15.1416 11.4253 14.8553C11.2628 14.7897 11.1073 14.7276 10.9583 14.6681L10.9581 14.6681L10.8038 14.6064V15.6435L9.45706 16.3689V14.6056C9.2611 14.6837 9.05371 14.7667 8.83352 14.8553C8.13726 15.1408 7.77227 15.6036 7.77227 15.9127C7.77227 16.3348 7.93659 16.5812 8.46922 16.9066C8.00661 17.1807 7.61068 17.5231 7.29351 17.9176C6.78915 17.4328 6.42625 16.7708 6.42625 15.9127C6.42625 14.7081 7.17638 13.68 8.43688 13.1628C9.33923 12.8008 10.0261 12.5292 10.5594 12.3193C12.1148 11.7053 12.2973 11.6288 12.6629 11.3653C13.0501 11.0855 13.304 10.7537 13.3875 10.4275C13.1471 10.3673 12.8959 10.2356 12.6589 10.029C11.9775 9.43361 11.6758 8.45597 11.9842 7.84435Z'
      fill='url(#paint0_linear_1045_4221)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_1045_4221'
        x1={15.2914}
        y1={-8.28975}
        x2={-7.38617}
        y2={-8.28975}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#1A4FBA' />
        <stop offset={0.286458} stopColor='#F3C294' />
        <stop offset={1} stopColor='#F4FAFF' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(CaduceusIcon);
export { Memo as CaduceusIcon };
