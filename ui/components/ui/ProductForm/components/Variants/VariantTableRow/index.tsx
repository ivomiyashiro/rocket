import { Dispatch, SetStateAction } from 'react';

import { IVariant } from 'interfaces';

import { useVariantTableRow } from './useVariantTableRow';

import { ImageIcon, MoneyIcon } from 'components/icons';
import { Input, Modal, Popup } from 'components/ui';
import { VariantMedia } from '../VariantMedia';

interface Props {
  variant: IVariant;
  handleVariants: Dispatch<SetStateAction<IVariant[]>>
}

export const VariantTableRow = ({ variant, handleVariants }: Props) => {

  const {
    isPopupOpen, setPopupOpen,
    inputRef, handleVariantMedia,
    handleVariantPrice, handleInventoryChange,
    handleIncreaseInventory, handleDecreaseInventory,
    handleSKU, handleBarcode
  } = useVariantTableRow({ variant, handleVariants });
  
  const minWith = { minWidth: '9.375rem' };

  return (
    <tr className='border-t items-center relative'>
      <td className='text-sm font-normal text-gray-600 text-left whitespace-nowrap px-4 pl-2 py-2 sticky left-0 min bg-white'> 
        <button className='border flex justify-center items-center p-4 rounded-md border-dashed cursor-pointer' onClick={ () => setPopupOpen(true) }>
          <ImageIcon size='20px' />
          <input type="file" ref={ inputRef } hidden />
        </button>
      </td>
      <td className='text-sm font-normal text-gray-600 text-left whitespace-nowrap px-4 py-2 bg-white' style={ { minWidth: '11rem' } }> 
        <p className='font-medium text-sm break-words'> { variant.name } </p>
      </td>
      <td className='text-sm font-normal text-gray-600 text-left whitespace-nowrap px-4 py-2' style={ minWith }> 
        <Input
          type='number'
          label=''
          error=''
          placeholder='0.00'
          textField={ <MoneyIcon size='22px' /> }
          inputValue={ variant.price }
          withError={ false }
          onChange={ handleVariantPrice }
        />
      </td>
      <td className='text-sm font-normal text-gray-600 text-left whitespace-nowrap px-4 py-2' style={ minWith }>
        <Input
          type='number'
          label=''
          error=''
          placeholder='0.00'
          textField={ <MoneyIcon size='22px' /> }
          inputValue={ variant.discountPrice }
          withError={ false }
          onChange={ handleVariantPrice }
        />  
      </td>
      <td className='text-sm font-normal text-gray-600 text-left whitespace-nowrap px-4 py-2' style={ { minWidth: '100px' } }  >
        <Input
          type='number'
          label=''
          error=''
          placeholder='0'
          inputValue={ variant.inventory }
          withError={ false }
          withSpinner={ true }
          onChange={ handleInventoryChange }
          handleIncreaseQuantity={ handleIncreaseInventory }
          handleDecreaseQuantity={ handleDecreaseInventory }
        />  
      </td>
      <td className='text-sm font-normal text-gray-600 text-left whitespace-nowrap px-4 py-2' style={ minWith }>
        <Input
          type='text'
          label=''
          error=''
          placeholder=''
          inputValue={ variant.sku }
          withError={ false }
          onChange={ handleSKU }
        />  
      </td>
      <td className='text-sm font-normal text-gray-600 text-left whitespace-nowrap px-4 py-2' style={ minWith }>
        <Input
          type='text'
          label=''
          error=''
          placeholder=''
          inputValue={ variant.barcode }
          withError={ false }
          onChange={ handleBarcode }
        />  
      </td>
      <td className=''>
        <Modal align='center' justify='center' isOpen={ isPopupOpen } handleOpen={ setPopupOpen } withBackground>
          <Popup
            title='Update variant images'
            primaryBtnText='Done'
            className='w-[620px]'
            handleClose={ setPopupOpen }
            onClick={ () => null }
          >
            <VariantMedia 
              variantImages={ variant.images }
              handleVariantImages={ handleVariantMedia }
            />
          </Popup>
        </Modal>
      </td>
    </tr>
  );
};
