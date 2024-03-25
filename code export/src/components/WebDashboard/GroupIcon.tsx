import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.43607 0.94551C6.68807 0.729393 7.00909 0.61059 7.34107 0.61059C7.67304 0.61059 7.99406 0.729393 8.24606 0.94551L12.6501 4.71979L14.3787 6.103C14.45 6.16005 14.5094 6.23058 14.5534 6.31057C14.5974 6.39056 14.6253 6.47843 14.6354 6.56918C14.6454 6.65993 14.6375 6.75178 14.6121 6.83947C14.5867 6.92716 14.5442 7.00899 14.4872 7.08028C14.4301 7.15157 14.3596 7.21092 14.2796 7.25495C14.1996 7.29899 14.1117 7.32683 14.021 7.3369C13.9302 7.34697 13.8384 7.33906 13.7507 7.31364C13.663 7.28821 13.5812 7.24576 13.5099 7.18871L12.9017 6.70216V12.2065C12.9017 12.5752 12.7552 12.9288 12.4945 13.1895C12.2338 13.4502 11.8802 13.5966 11.5115 13.5966H8.73122V10.1213C8.73122 9.75256 8.58476 9.39897 8.32406 9.13826C8.06335 8.87756 7.70976 8.73109 7.34107 8.73109C6.97237 8.73109 6.61878 8.87756 6.35808 9.13826C6.09737 9.39897 5.95091 9.75256 5.95091 10.1213V13.5966H3.17059C2.8019 13.5966 2.4483 13.4502 2.1876 13.1895C1.92689 12.9288 1.78043 12.5752 1.78043 12.2065V6.70146L1.17224 7.18802C1.10143 7.24848 1.0192 7.2941 0.930428 7.32217C0.841654 7.35024 0.748145 7.36019 0.655453 7.35142C0.56276 7.34266 0.472773 7.31536 0.390832 7.27115C0.308891 7.22694 0.236668 7.16672 0.178448 7.09406C0.120228 7.02141 0.0771994 6.93779 0.0519154 6.84819C0.0266314 6.75858 0.0196076 6.6648 0.0312609 6.57243C0.0429142 6.48006 0.0730071 6.39097 0.119753 6.31045C0.1665 6.22993 0.228946 6.15962 0.303387 6.10369L2.03205 4.72049L6.43607 0.94551V0.94551Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
