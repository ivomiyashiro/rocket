import Image from 'next/image';


export const ProviderForm = () => {
  return (
    <form action="">
      <button className='flex items-center gap-3 w-full justify-center py-2 border border-gray-200 rounded-md' type="button">
        <Image
          src="https://pbs.twimg.com/profile_images/1311763847775125516/mvBRhlDs_400x400.jpg" 
          alt="google-logo"
          width={ 25 }
          height={ 25 }
        />
        <p> Sign in with Google </p>
      </button>
    </form>
  );
};
