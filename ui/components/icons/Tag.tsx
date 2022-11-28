import { IIcons } from './interface';

export const TagIcon = ({ size, color, ...props }: IIcons) => (
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
    <path d="M10.408 3H16a1 1 0 0 1 1 1v5.592a2 2 0 0 1-.57 1.399l-5.162 5.277a2.5 2.5 0 0 1-3.536 0l-4-4a2.5 2.5 0 0 1 0-3.536l.008-.008L9.01 3.57A2 2 0 0 1 10.407 3ZM13.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);
