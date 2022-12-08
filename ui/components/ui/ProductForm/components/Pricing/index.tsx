import { ChangeEvent, Dispatch, FocusEvent, SetStateAction } from 'react';
import { MoneyIcon } from 'components/icons';
import { Input, DashboardCard } from 'components/ui';

interface Props {
  priceValue: { value: string, error: string };
  discountPriceValue: { value: string, error: string };
  handlePriceValue: Dispatch<SetStateAction<{ value: string, error: string }>>;
  handleDiscountPriceValue: Dispatch<SetStateAction<{ value: string, error: string }>>;
}

export const Pricing = ({ 
  priceValue,
  discountPriceValue, 
  handlePriceValue, 
  handleDiscountPriceValue 
}: Props) => {

  const handleInputPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    handlePriceValue((prev) => ({ ...prev, value: e.target.value }));
  };

  const handleDiscountPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleDiscountPriceValue((prev) => ({ ...prev, value: e.target.value }));
  };

  const handleInputPriceBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      return handlePriceValue((prev) => ({ ...prev, value: '0.00' }));
    } 

    const formatedPrice = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(Number(e.target.value));
    handlePriceValue((prev) => ({ ...prev, value: formatedPrice }));
  };

  const handleInputDiscountPriceBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      return handleDiscountPriceValue((prev) => ({ ...prev, value: '0.00' }));
    } 

    const formatedPrice = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(Number(e.target.value));
    handleDiscountPriceValue((prev) => ({ ...prev, value: formatedPrice }));
  };

  return (
    <DashboardCard title='Pricing' className='p-5 pb-0'>
      <Input
        type='number' 
        label='Price'
        placeholder='0.00'
        inputValue={ priceValue.value }
        error={ priceValue.error }
        textField={ <MoneyIcon size='22px' /> }
        onBlur={ handleInputPriceBlur }
        onChange={ handleInputPriceChange }
      />
      <Input
        type='number'
        label='Compare at price'
        placeholder='0.00'
        inputValue={ discountPriceValue.value }
        error={ discountPriceValue.error }
        textField={ <MoneyIcon size='22px' /> }
        onBlur={ handleInputDiscountPriceBlur }
        onChange={ handleDiscountPriceChange }
      />
    </DashboardCard>
  );
};
