import { IIcons } from './interface';

export const UserRoundedIcon = ({ size, color, ...props }: IIcons) => (
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
    <path d="M10 15c-1.631 0-3.064-.792-3.978-2 .914-1.208 2.347-2 3.978-2 1.631 0 3.064.792 3.978 2-.914 1.208-2.347 2-3.978 2zm0-10c1.104 0 2 .897 2 2s-.896 2-2 2-2-.897-2-2 .896-2 2-2zm0-3c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z" />
  </svg>
);
