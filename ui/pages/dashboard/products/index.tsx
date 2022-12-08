import { getServerSideProps } from 'pages/dashboard';
import { AddNewProductPage as Page } from 'components/pages';
import { DashboardLayout } from 'components/layouts';
import { ProductFormProvider } from 'context';

const ProductsPage = () => {
  return (
    <DashboardLayout pageTitle='• Products'>

    </DashboardLayout>
  );
};

export default ProductsPage;

export { getServerSideProps };
