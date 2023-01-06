import { getServerSideProps } from 'pages/dashboard';
import { DashboardProductList } from 'components/pages';
import { DashboardLayout } from 'components/layouts';

const DashboardProductsPage = () => {
  return (
    <DashboardLayout pageTitle='• Products' wide>
      <DashboardProductList />
    </DashboardLayout>
  );
};

export default DashboardProductsPage;

export { getServerSideProps };
