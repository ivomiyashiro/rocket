import { IIcons } from './interface';

export const HomeIcon = ({ size, color, ...props }: IIcons) => (
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
    <path d="M10.555 3.168a1 1 0 0 0-1.11 0L3.891 6.87A2 2 0 0 0 3 8.535V15a2 2 0 0 0 2 2h2a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h2a2 2 0 0 0 2-2V8.535a2 2 0 0 0-.89-1.664l-5.555-3.703Z" />
  </svg>
);