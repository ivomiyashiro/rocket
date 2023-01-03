import { ReactNode } from 'react';
import Head from 'next/head';

import { DashboardMenu } from './DashboardMenu';
import { DashboardHeader } from './DashboardHeader';

interface Props {
  children: ReactNode;
  pageTitle?: string;
  wide?: boolean;
}

export const DashboardLayout = ({ children, pageTitle = '', wide }: Props) => {
  return (
    <>
      <Head>
        <title>{ `Rocket • Dashboard ${pageTitle}` }</title>
      </Head>

      <DashboardHeader />
      <div className='grid grid-cols-1 md:grid-cols-dashboard bg-gray-50'>
        <DashboardMenu />
        <div className='overflow-hidden'>
          <div className={ `mx-auto w-full px-6 pt-20 min-h-screen ${ !!wide ? 'px[1.5rem]' : 'max-w-dashboard-main'}` }>
            { children }
          </div>
        </div>
      </div>
    </>
  );
};
