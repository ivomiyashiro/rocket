import { ReactNode } from 'react';

interface Props {
  title?: string;
  children: ReactNode
}

export const DashboardCard = ({ title = '', children }: Props) => {
  return (
    <div className='w-full p-5 shadow-card bg-white outline outline-1 outline-divider rounded-md'>
      {
        title
        &&
        <div>
          <h3 className='font-medium mb-3'>{ title }</h3>
        </div>
      }
      { children } 
    </div>
  );
};
