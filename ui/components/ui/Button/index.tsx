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

  if (type === 'a') {
    return (
      <a href={ href } >{ children }</a>
    );
  }

  if (type === 'button') {
    return (
      <button className={ `w-full py-2 rounded-md ${ bgColor } ${ textColor }` } onClick={ onClick }>{ children }</button>
    );
  }

  if (type === 'link') {
    return (
      <Link href={ href } >{ children }</Link>
    );
  }

  return <></>;
};
