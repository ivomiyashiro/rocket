import { Dispatch, ReactNode, SetStateAction } from 'react';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
  withBackground?: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ children, isOpen, align = 'center', justify = 'center', withBackground = false, handleOpen }: Props) => {
  return (
    <div className={ `fixed top-0 left-0 flex h-screen overflow-hidden z-30 items-${ align } justify-${ justify } ${ isOpen ? 'w-full' : 'w-0'}` }>
      <div className='relative z-30 top-0'>{ children }</div>
      <div className={ `h-full w-full absolute ${ isOpen ? 'block' : 'hidden'} ${ withBackground && 'bg-black bg-opacity-50'}` } onClick={ () => handleOpen(false) } />
    </div>
  );
};
