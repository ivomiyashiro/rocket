import { GetServerSideProps } from 'next';

import { checkDBToken } from 'services';

import { DashboardPage as Page } from 'components/pages';
import { DashboardLayout } from 'components/layouts';

const DashboardPage = () => {
  return (
    <DashboardLayout pageTitle=''>
      <Page />
    </DashboardLayout>
  );
};

export default DashboardPage;

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

  const token = req.cookies.token || '';
  const { p = '/' } = query;

  try {
    if (!!!token) {       
      return {
        redirect: {
          destination: p.toString(),
          permanent: false
        }
      }; 
    }

    const { user } = await checkDBToken({ token });

    if (!!!user || (user.role !== 'ADMIN' && user.role !== 'SUPERADMIN')) {
      return {
        redirect: {
          destination: p.toString(),
          permanent: false
        }
      };
    }
  } catch (error) {
    console.log(error);
  }

  return { props: { } };
};
