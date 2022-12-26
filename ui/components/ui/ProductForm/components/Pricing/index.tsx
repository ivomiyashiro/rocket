import { FocusEvent, useContext, useState } from 'react';

import { ProductFormContext } from 'context';
import { formatPriceNumber } from 'helpers';

import { MoneyIcon } from 'components/icons';
import { Input, DashboardCard } from 'components/ui';

export const Pricing = () => {

  const { handlePriceChange, handleDiscountPriceChange } = useContext(ProductFormContext);

  const [productPrice, setProductPrice] = useState('');
  const [productDiscountPrice, setDiscountPrice] = useState('');

  const handleInputDiscountPriceBlur = ({ e }: { e: FocusEvent<HTMLInputElement> }) => {
    if (isNaN(Number(e.target.value))) { return setDiscountPrice('0.00'); } 
    
    const formatedPrice = formatPriceNumber({ value: e.target.value });
    setDiscountPrice(formatedPrice);
    handlePriceChange({ value: formatedPrice });
  };

  const handleInputPriceBlur = ({ e }: { e: FocusEvent<HTMLInputElement> }) => {
    if (isNaN(Number(e.target.value))) { return setProductPrice('0.00'); } 
    
    const formatedPrice = formatPriceNumber({ value: e.target.value });
    setProductPrice(formatedPrice);
    handleDiscountPriceChange({ value: formatedPrice });
  };

  return (
    <DashboardCard title='Pricing' className='p-5 pb-0'>
      <Input
        type='number' 
        label='Price'
        placeholder='0.00'
        inputValue={ productPrice }
        error=''
        textField={ <MoneyIcon size='22px' /> }
        onBlur={ (e) => handleInputPriceBlur({ e }) }
        onChange={ (e) => setProductPrice(e.target.value) }
      />
      <Input
        type='number'
        label='Compare at price'
        placeholder='0.00'
        inputValue={ productDiscountPrice }
        error=''
        textField={ <MoneyIcon size='22px' /> }
        onBlur={ (e) => handleInputDiscountPriceBlur({ e }) }
        onChange={ (e) => setDiscountPrice(e.target.value) }
      />
    </DashboardCard>
  );
};
