import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { SigninPage as Page } from 'components/pages';
import { checkDBToken } from 'services';

const SigninPage = () => {
  return (
    <>
      <Head>  
        <title>Signin - Rocket</title>
        <meta name="description" content="Signin to Rocket." />
      </Head>
      <div className='w-full h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500'>
        <Page />
      </div>
    </>
  );
};

export default SigninPage;

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const token = req.cookies.token || '';
  const { user } = await checkDBToken({ token });

  const { p = '/' } = query;

  if (user) {
    return {
      redirect: {
        destination: p.toString(),
        permanent: false
      }
    };
  }

  return {
    props: { }
  };
};