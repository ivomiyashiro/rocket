import { ReactNode } from 'react';
import Head from 'next/head';
import { DashboardMenu } from './DashboardMenu';
import { DashboardHeader } from './DashboardHeader';

interface Props {
  children: ReactNode;
  sectionTitle: string;
  pageTitle?: string;
}

export const DashboardLayout = ({ children, pageTitle = '', sectionTitle }: Props) => {
  return (
    <>
      <Head>
        <title>Rocket • Dashboard { pageTitle }</title>
      </Head>

      <div className='grid grid-cols-dashboard bg-gray-50'>
        <DashboardMenu />
        <div className='px-12'>
          <DashboardHeader title={ sectionTitle } />
          <div>
            { children }
          </div>
        </div>
      </div>
    </>
  );
};
