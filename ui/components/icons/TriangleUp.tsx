import { IIcons } from './interface';

export const TriangeUpIcon = ({ size, color, ...props }: IIcons) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={ 0 }
    viewBox="0 0 20 20"
    height={ size }
    width={ size }
    color={ color }
    { ...props }
  >
    <path d="M6.902 12h6.196c.751 0 1.172-.754.708-1.268L10.708 7.3c-.36-.399-1.055-.399-1.416 0l-3.098 3.433C5.73 11.246 6.151 12 6.902 12Z" />
  </svg>
);