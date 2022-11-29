import { Dispatch, ReactNode, SetStateAction } from 'react';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  align: 'start' | 'center' | 'end';
  justify: 'start' | 'center' | 'end';
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ children, isOpen, align, justify, handleOpen }: Props) => {
  return (
    <div className={ `fixed top-0 left-0 flex items-${ align } justify-${ justify } z-20 ${ isOpen ? 'w-full' : 'w-0'}` }>
      { children }
      <div className={ `h-full w-full fixed z-10 ${ isOpen ? 'block' : 'hidden'}` } onClick={ () => handleOpen(false) } />
    </div>
  );
};
