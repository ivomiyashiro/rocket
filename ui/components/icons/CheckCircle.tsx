import { IIcons } from './interface';

export const CheckCircleIcon = ({ size, color, ...props }: IIcons) => (
  <svg
    fill="currentColor"
    viewBox="0 0 20 20"
    className="Polaris-Icon__Svg_375hu"
    aria-hidden="true"
    width={ size }
    height={ size }
    color={ color }
    { ...props }
  >
    <path d="M10 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm-1 9a.997.997 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A.996.996 0 0 1 9 13z" />
  </svg>
);
