import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { LogoutIcon } from 'components/icons';
import { Menu } from 'components/ui';

interface Props {
  isOpen: boolean,
  handleOpen: Dispatch<SetStateAction<boolean>>;
  signout: () => void;
}

export const UserMenu = ({ isOpen, handleOpen, signout }: Props) => {

  const router = useRouter();

  const handleSignOut = () => {
    signout();
    router.replace('/signin');
  };

  return (
    <Menu isOpen={ isOpen } handleOpen={ handleOpen }>
      <menu className={ `absolute right-0 w-full min-w-dashboard-header-menu mt-4 z-20 rounded-md shadow-popover bg-white overflow-hidden ${ isOpen ? 'h-auto outline outline-1 outline-divider' : 'h-0' }` }>
        <ul className='p-2'>
          <li>
            <button onClick={ handleSignOut } className='flex items-center gap-2 w-full text-gray-600 p-2 rounded-md hover:bg-gray-100'>
              <LogoutIcon size='22px' color='' />
              <p>Log out</p>
            </button>
          </li>
        </ul>
      </menu>
    </Menu>
  );
};
