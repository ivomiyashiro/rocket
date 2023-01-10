import { getServerSideProps } from 'pages/dashboard';

import { ProductFormProvider } from 'context';

import { ProductFormPage as Page } from 'components/pages';
import { DashboardLayout } from 'components/layouts';

const AddNewProductPage = () => {
  return (
    <ProductFormProvider>
      <DashboardLayout pageTitle='• Products • New'>
        <Page />
      </DashboardLayout>
    </ProductFormProvider>
  );
};

export default AddNewProductPage;

export { getServerSideProps };
