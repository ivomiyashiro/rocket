import { ReactNode } from 'react';

interface Props {
  title?: string;
  className?: string;
  children: ReactNode;
}

export const DashboardCard = ({ title = '', className, children }: Props) => {
  return (
    <section className={ `w-full shadow-card bg-white outline outline-1 outline-divider rounded-md ${ className }` }>
      {
        title
        &&
        <div>
          <h3 className='font-medium mb-5'>{ title }</h3>
        </div>
      }
      { children } 
    </section>
  );
};
