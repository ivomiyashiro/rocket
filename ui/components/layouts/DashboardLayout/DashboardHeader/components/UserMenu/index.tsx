import { LogoutIcon } from 'components/icons';
import { Modal } from 'components/ui';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

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
    <Modal isOpen={ isOpen } handleOpen={ handleOpen }>
      <menu className={ `absolute right-0 w-full mt-6 z-20 rounded-md shadow-popover bg-white overflow-hidden ${ isOpen ? 'h-auto outline outline-1 outline-divider' : 'h-0' }` }>
        <ul className='p-2'>
          <li>
            <button onClick={ handleSignOut } className='flex items-center gap-2 w-full text-gray-600 p-2 rounded-md hover:bg-gray-100'>
              <LogoutIcon size='22px' color='' />
              <p>Log out</p>
            </button>
          </li>
        </ul>
      </menu>
    </Modal>
  );
};
