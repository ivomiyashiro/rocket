import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  type: 'button' | 'a' | 'link';
  target?: '_blank' | '_self' | '_parent' | '_top';
  href?: string;
  bgColor: string;
  textColor: string;
  onClick?: () => void;
}

export const Button = ({ 
  children,
  type = 'button', 
  href = '',
  bgColor,
  textColor,
  onClick 
}: Props) => {

  const className = `w-full h-full py-2 rounded-md flex items-center justify-center gap-1 ${ bgColor } ${ textColor }`;

  if (type === 'a') {
    return (
      <a href={ href } className={ className } >{ children }</a>
    );
  }

  if (type === 'button') {
    return (
      <button className={ className } onClick={ onClick }>{ children }</button>
    );
  }

  if (type === 'link') {
    return (
      <Link href={ href } className={ className } >{ children }</Link>
    );
  }

  return <></>;
};
