import { IIcons } from './interface';

export const LogoutIcon = ({ size, color, ...props }: IIcons) => (
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
    <path d="M10 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.293 8.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L10.586 12H7a1 1 0 1 1 0-2h3.586L9.293 8.707z" />
  </svg>
);
