import { IIcons } from './interface';

export const ChevronLeftIcon = ({ size, color, ...props }: IIcons) => (
  <svg
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
    width={ size }
    height={ size }
    color={ color }
    { ...props }
  >
    <path d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z" />
  </svg>
);
