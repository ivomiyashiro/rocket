import { GetServerSideProps } from 'next';
import { IProduct } from 'interfaces';
import { checkDBToken, getDBProduct } from 'services';
import { ProductFormProvider } from 'context';
import { DashboardLayout } from 'components/layouts';
import { ProductFormPage } from 'components/pages';

interface Props { product: IProduct; }

const DashboardProductsPage = ({ product }: Props) => {
  return (
    <ProductFormProvider product={ product }>
      <DashboardLayout pageTitle='• Products • New'>
        <ProductFormPage product={ product } />
      </DashboardLayout>
    </ProductFormProvider>
  );
};

export default DashboardProductsPage;

export const getServerSideProps: GetServerSideProps = async ({ req, query, params }) => {

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

    const { product } = await getDBProduct({ id: params!.id as string });

    return { props: { product } };

  } catch (error) {
    console.log(error);
  }

  return { props: { } };
};



