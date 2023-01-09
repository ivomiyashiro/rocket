import { Button } from 'components/ui';

interface Props {
  handleSetActiveProduct: () => void;
  handleSetDrafProduct: () => void;
  handleDeleteProduct: () => void;
}

export const ProductTableMenu = ({ 
  handleSetActiveProduct, 
  handleSetDrafProduct,
  handleDeleteProduct
}: Props) => {
  return (
    <div className='fixed bottom-10 flex flex-col justify-center bg-[#202123] rounded-lg p-4 shadow-md'>
      <div className='flex gap-3'>
        <Button
          bgColor='transparent' 
          type='button' 
          textColor='gray-200'
          className='h-[28px] px-4 border-gray-600 hover:bg-gray-800' 
          outline
          onClick={ handleSetActiveProduct }
        >
          <span className='text-sm'> Set as active </span>
        </Button>
        <Button 
          bgColor='transparent' 
          type='button' 
          textColor='gray-200' 
          className='h-[28px] px-4 border-gray-600 hover:bg-gray-800' 
          outline 
          onClick={ handleSetDrafProduct }
        >
          <span className='text-sm'> Set as draft </span>
        </Button>
        <Button 
          bgColor='transparent' 
          type='button' 
          textColor='gray-200' 
          className='h-[28px] px-4 border-gray-600 hover:bg-red-500 hover:border-red-500 hover:text-white' 
          outline 
          onClick={ handleDeleteProduct }
        >
          <span className='text-sm'> Delete products </span>
        </Button>
      </div>
    </div>
  );
};
