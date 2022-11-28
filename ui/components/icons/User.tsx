import { IIcons } from './interface';

export const UserIcon = ({ size, color, ...props }: IIcons) => (
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
    <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-3.5 8a2.5 2.5 0 0 1-1.768-4.268C5.322 12.155 7.2 11 10 11s4.678 1.155 5.268 1.732A2.5 2.5 0 0 1 13.5 17h-7Z" />
  </svg>
);
