import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  type: 'button' | 'a' | 'link' | 'submit';
  target?: '_blank' | '_self' | '_parent' | '_top';
  href?: string;
  bgColor: string;
  textColor: string;
  outline?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ 
  children,
  type = 'button', 
  href = '',
  bgColor,
  textColor,
  outline = false,
  disabled = false,
  className = '',
  onClick 
}: Props) => {

  const outlineStyles = outline ? `border border-${ textColor } text-${ textColor }` : '';
  const styles = `h-full py-2 rounded-md flex items-center justify-center gap-1 bg-${ bgColor } text-${ textColor } ${ outlineStyles } ${ className }`;

  if (type === 'a') {
    return (
      <a href={ href } className={ styles }>{ children }</a>
    );
  }

  if (type === 'link') {
    return (
      <Link href={ href } className={ styles }>{ children }</Link>
    );
  }

  return (
    <button type={ type } className={ styles } onClick={ onClick } disabled={ disabled }>{ children }</button>
  );
};
