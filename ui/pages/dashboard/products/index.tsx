import { NewProductPage as Page } from 'components/pages';
import { DashboardLayout } from 'components/layouts';
import { getServerSideProps } from 'pages/dashboard';

const NewProductPage = () => {
  return (
    <DashboardLayout pageTitle='• Products • New' sectionTitle='Products'>
      <Page />
    </DashboardLayout>
  );
};

export default NewProductPage;

export { getServerSideProps };
