import { useContext, useRef } from 'react';
import Image from 'next/image';

import { IProductFormVariant, ProductFormContext } from 'context';

import { ImageIcon, MoneyIcon } from 'components/icons';
import { Input, Modal, Popup } from 'components/ui';
import { VariantMedia } from '../VariantMedia';

interface Props { variant: IProductFormVariant; }

export const VariantTableRow = ({ variant }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const {
    handleVariantPrice,
    handleDiscountPrice,
    handleInventoryChange,
    handleIncreaseInventory,
    handleDecreaseInventory,
    handleSKU,
    handleBarcode,
    handleTogglePopup,
    handleFormatPrice,
    handleFormatDiscountPrice,
  } = useContext(ProductFormContext);
  
  const minWith = { minWidth: '9.375rem' };
  const featImg = variant?.images[0]?.url;

  return (
    <tr className='border-t items-center relative'>
      <td className='text-sm font-normal text-gray-600 text-left whitespace-nowrap px-4 pl-2 py-2 sticky left-0 min bg-white'> 
        <button type='button' className='border flex justify-center items-center p-4 w-full h-[54px] rounded-md border-dashed cursor-pointer relative' onClick={ () => handleTogglePopup({ id: variant.id }) }>
          {
            !!!featImg
              ? <ImageIcon size='20px' />
              : (
                <Image 
                  src={ featImg } 
                  alt={ variant.id } 
                  sizes='33vw'
                  placeholder="blur"
                  style={ { objectFit: 'contain', padding: '2px' } }
                  blurDataURL={ featImg } 
                  fill
                />
              ) 
          }
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
          onBlur={ () => handleFormatPrice({ id: variant.id }) }
          onChange={ (e) => handleVariantPrice({ id: variant.id, e }) }
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
          onBlur={ () => handleFormatDiscountPrice({ id: variant.id }) }
          onChange={ (e) => handleDiscountPrice({ id: variant.id, e }) }
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
          onChange={ (e) => handleInventoryChange({ id: variant.id, e }) }
          handleIncreaseQuantity={ () => handleIncreaseInventory({ id: variant.id }) }
          handleDecreaseQuantity={ () => handleDecreaseInventory({ id: variant.id }) }
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
          onChange={ (e) => handleSKU({ id: variant.id, e }) }
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
          onChange={ (e) => handleBarcode({ id: variant.id, e }) }
        />  
      </td>
      <td className=''>
        <Modal 
          align='center' 
          justify='center' 
          isOpen={ variant.popupOpen } 
          handleOpen={ () => handleTogglePopup({ id: variant.id }) } 
          withBackground
        >
          <Popup
            title='Update variant images'
            primaryBtnText='Done'
            className='w-[620px]'
            handleClose={ () => handleTogglePopup({ id: variant.id }) }
            onClick={ () => handleTogglePopup({ id: variant.id }) }
          >
            <VariantMedia
              variantID={ variant.id }
              media={ variant.images }
            />
          </Popup>
        </Modal>
      </td>
    </tr>
  );
};
