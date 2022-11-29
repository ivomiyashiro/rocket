import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

export const FormCard = ({ children }: Props) => {
  return (
    <div className='w-full p-5 shadow-card bg-white outline outline-1 outline-divider rounded-md'> 
      { children } 
    </div>
  );
};
