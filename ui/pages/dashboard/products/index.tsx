import { getServerSideProps } from 'pages/dashboard';
import { DashboardProductsTable } from 'components/pages';
import { DashboardLayout } from 'components/layouts';

const DashboardProductsPage = () => {
  return (
    <DashboardLayout pageTitle='• Products' wide>
      <DashboardProductsTable />
    </DashboardLayout>
  );
};

export default DashboardProductsPage;

export { getServerSideProps };
