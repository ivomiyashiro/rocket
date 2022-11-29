import { ReactNode } from 'react';
import Head from 'next/head';
import { DashboardMenu } from './DashboardMenu';
import { DashboardHeader } from './DashboardHeader';

interface Props {
  children: ReactNode;
  pageTitle?: string;
}

export const DashboardLayout = ({ children, pageTitle = '' }: Props) => {
  return (
    <>
      <Head>
        <title>{ `Rocket • Dashboard ${pageTitle}` }</title>
      </Head>

      <DashboardHeader />
      <div className='grid grid-cols-1 md:grid-cols-dashboard bg-gray-50'>
        <DashboardMenu />
        <div className=''>
          <div className='max-w-dashboard-main mx-auto w-full px-2 py-4 min-h-screen'>
            { children }
          </div>
        </div>
      </div>
    </>
  );
};
