import { IIcons } from './interface';

export const StoreIcon = ({ size, color, ...props }: IIcons) => (
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
    <path d="M2.971 1.545A1 1 0 0 1 3.861 1h12.277a1 1 0 0 1 .89.545l1.669 3.128c.03.062.063.138.094.224.09.228.153.47.185.722.015.098.024.189.024.263V6a2.992 2.992 0 0 1-1.092 2.315A2.988 2.988 0 0 1 16 9c-.617 0-1.19-.186-1.666-.505A2.997 2.997 0 0 1 13 6v.02A2.997 2.997 0 0 1 10 9a2.986 2.986 0 0 1-1.677-.512A2.997 2.997 0 0 1 7 6.019 2.997 2.997 0 0 1 4 9c-.768 0-1.47-.289-2-.764C1.386 7.686 1 6.888 1 6v-.118c0-.063.007-.137.019-.218.049-.443.194-.856.415-1.219l1.537-2.9zM18 17.5v-6.916A4.983 4.983 0 0 1 16 11a4.978 4.978 0 0 1-3-1c-.836.628-1.874 1-3 1a4.978 4.978 0 0 1-3-1c-.836.628-1.874 1-3 1a4.983 4.983 0 0 1-2-.416V17.5A1.5 1.5 0 0 0 3.5 19h2A1.5 1.5 0 0 0 7 17.5v-3A1.5 1.5 0 0 1 8.5 13h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5z" />
  </svg>
);
