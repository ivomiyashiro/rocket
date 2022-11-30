import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  href: string;
  children: ReactNode;
  icon: JSX.Element;
}

export const MenuLink = ({ href, children, icon: Icon }: Props) => {

  const router = useRouter();
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const url = href.split('/').at(-1) || '';
    const pathName = router.pathname.split('/').at(2) || 'dashboard'; // Check if exists array[2], if not exists current page is dashboard home page.

    if (pathName.includes(url)) return setActive(true);
    setActive(false);
  }, [router.pathname, href]);

  return (
    <Link href={ href }>
      <li className={ `flex items-center rounded-md gap-5 ${ isActive ? 'bg-indigo-50 text-indigo-600' : 'bg-transparent hover:bg-gray-100 text-gray-600'}` }>
        <div className={ `w-1 h-11 rounded-xl ${isActive ? 'bg-indigo-600' : 'bg-transparent'}` }/>
        <div className='flex items-center gap-2'>
          { Icon }
          <p className={ `text-sm ${ isActive ? 'font-bold' : 'font-medium'}` }> { children } </p>
        </div>
      </li>
    </Link>
  );
};
