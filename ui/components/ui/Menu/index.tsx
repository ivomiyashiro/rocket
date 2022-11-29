import { Dispatch, ReactNode, SetStateAction } from 'react';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

export const Menu = ({ children, isOpen, handleOpen }: Props) => {
  return (
    <>
      <div
        className={ `h-screen fixed top-0 z-10 left-0 ${ isOpen ? 'w-full' : 'w-0'}` }
        onClick={ () => handleOpen(false) }
      />
      { children }
    </>
  );
};
