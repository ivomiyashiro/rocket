import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Button } from '../Button';

interface Props {
  title: string;
  children: ReactNode;
  primaryBtnType?: 'danger' | 'normal' | 'success'
  primaryBtnText: string;
  className: string;
  handleClose: Dispatch<SetStateAction<boolean>>;
  onClick: () => void;
}

export const Popup = ({ 
  title, primaryBtnText,
  children, className, 
  primaryBtnType = 'normal',
  handleClose, onClick 
}: Props) => {

  const btnColor = primaryBtnType === 'danger' ? 'bg-red-500' : primaryBtnType === 'normal' ? 'bg-indigo-600' : 'bg-green-500';

  return (
    <div className={ `bg-white rounded-lg ${ className }` }>
      <div className='flex items-center justify-between p-4 px-5 border-b'>
        <h3 className='text-xl font-medium'>{ title }</h3>
        <button type='button' className='text-2xl hover:bg-gray-100 px-2 flex items-center justify-center rounded-md' onClick={ () => handleClose(false) }>
          &times;
        </button>
      </div>
      <div className='p-4 px-5'>
        { children }
      </div>
      <div className='p-4 px-5 border-t flex gap-4 justify-end'>
        <button
          type='button'
          className='border border-gray-300 w-24 rounded-md hover:bg-gray-50'
          onClick={ () => handleClose(false) }
        >
          <p className='text-sm'>Cancel</p>
        </button>
        <div className='w-24'>
          <Button 
            type='button'
            textColor='text-white' 
            bgColor={ btnColor }
            onClick={ onClick }
          >
            <p className='text-sm'>{ primaryBtnText }</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
