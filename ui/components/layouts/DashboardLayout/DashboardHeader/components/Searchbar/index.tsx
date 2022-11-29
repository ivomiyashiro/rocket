import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { SearchIcon } from 'components/icons';
import { Modal } from 'components/ui';

interface Props {
  isOpen: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

export const Searchbar = ({ isOpen, handleOpen }: Props) => {

  const [isInputFocus, setInputFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
  }, [isOpen]);

  return (
    <Modal isOpen={ isOpen } align="start" justify="center" handleOpen={ handleOpen }>
      <div className={ `w-full md:max-w-dashboard-searcher bg-white p-4 shadow-2xl relative top-0 z-20 rounded-md ${ isOpen ? 'block' : 'hidden'}` }>
        <div className='text-gray-600 w-full'>
          <button className={ `flex p-2 gap-2 items-center bg-gray-100 rounded-md w-full text-gray-500 border border-gray-200 cursor-default ${ isInputFocus && 'outline outline-2 outline-indigo-500' }` }>
            <SearchIcon size='21px' />
            <input 
              type="text" 
              placeholder='Search' 
              className='w-full bg-transparent outline-none' 
              ref={ inputRef } 
              onFocus={ () => setInputFocus(true) } onBlur={ () => setInputFocus(false) } 
            />
          </button>
        </div>
        <div className='min-h-dashboard-searcher-results flex justify-center items-center'>
          <p className='text-center text-sm text-gray-500 w-96'>Search your store and Rocket&apos;s resources, like products, orders, and customers.</p>
        </div>
      </div>
    </Modal>
  );
};
