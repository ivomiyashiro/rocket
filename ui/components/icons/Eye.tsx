import { IIcons } from './interface';

export const EyeIcon = ({ size, color, ...props }: IIcons) => (
  <svg
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
    width={ size }
    height={ size }
    color={ color }
    { ...props }
  >
    <path d="M17.928 9.628C17.837 9.399 15.611 4 10 4S2.162 9.399 2.07 9.628a1.017 1.017 0 0 0 0 .744C2.163 10.601 4.389 16 10 16s7.837-5.399 7.928-5.628a1.017 1.017 0 0 0 0-.744zM10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 .002 4.001A2 2 0 0 0 9.999 8z" />
  </svg>
);
