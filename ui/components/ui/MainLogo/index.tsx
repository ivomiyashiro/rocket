import { RocketIcon } from 'components/icons';
import Link from 'next/link';

interface Props { 
  href: string;
}

export const MainLogo = ({ href }: Props) => {
  return (
    <Link href={ href }>
      <div className='text-indigo-600 flex items-center gap-1'>
        <RocketIcon size='35px' />
        <p className='text-2xl italic font-extrabold text-gray-700'>Rocket</p>
      </div>
    </Link>
  );
};
