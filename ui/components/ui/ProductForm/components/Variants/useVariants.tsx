import { useEffect, useState } from 'react';
import { IOption, IVariant } from 'interfaces';
import { getArrayCombinatios } from 'helpers';

interface Props { options: IOption[]; }

export const useVariants = ({ options }: Props) => {

  const [variants, setVariants] = useState<IVariant[]>([]);

  useEffect(() => {
    const optValues = options.map(opt => opt.values.map(val => val.value));
    // Check if there are options created.
    if (optValues.length === 1 && optValues[0].length === 1 && optValues[0].includes('')) return;

    const combinations = getArrayCombinatios(...optValues);
    
    setVariants(combinations.map((arr: string[]) => (
      {
        id: Math.random(),
        name: arr.join(' • '),
        inventory: '0',
        price: '',
        discountPrice: '',
        sku: '',
        barcode: '',
        images: ''
      }
    )));
  }, [options]);

  return {
    variants,
    setVariants
  };
};
