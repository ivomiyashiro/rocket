import { IIcons } from './interface';

export const TriangleDownIcon = ({ size, color, ...props }: IIcons) => (
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
    <path d="M13.098 8H6.902c-.751 0-1.172.754-.708 1.268L9.292 12.7c.36.399 1.055.399 1.416 0l3.098-3.433C14.27 8.754 13.849 8 13.098 8Z" />
  </svg>
);
