import { Icon } from '@/domains/Icon';

export const GitIcon = ({ width = 52, height = 52 }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="#fff"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M13.414 3.828a2 2 0 00-2.828 0l-.672.672 1.568 1.568a2.002 2.002 0 012.45 2.45l2.05 2.05a2 2 0 11-1.414 1.414L13 10.414v4.854A2 2 0 0112 19a2 2 0 01-1-3.732V9.732a2 2 0 01-.932-2.25L8.5 5.914l-4.672 4.672a2 2 0 000 2.828l6.758 6.758a2 2 0 002.828 0l6.758-6.758a2 2 0 000-2.828l-6.758-6.758zM9.172 2.414a4 4 0 015.656 0l6.758 6.758a4 4 0 010 5.656l-6.758 6.758a4 4 0 01-5.656 0l-6.758-6.758a4 4 0 010-5.656l6.758-6.758z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
