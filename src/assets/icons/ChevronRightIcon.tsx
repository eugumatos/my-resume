import { Icon } from '@/domains/Icon';

export const ChevronRightIcon = ({ width = 20, height = 20 }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      transform="rotate(180)"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 7l-5 5 5 5"
      ></path>
    </svg>
  );
};
