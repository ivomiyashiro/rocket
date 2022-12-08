import { FormEvent, useState } from 'react';
import { IOption } from 'interfaces';

export const useNewProduct = () => {

  const [titleValue, setTitleValue] = useState({ value: '', error: '' });
  const [descriptionValue, setDescriptionValue] = useState({ value: '', error: '' });
  const [mediaValue, setMediaValue] = useState<{ id: string, url: string, isChecked: boolean }[]>([]);
  const [priceValue, setPriceValue] = useState({ value: '', error: '' });
  const [discountPriceValue, setDiscountPriceValue] = useState({ value: '', error: '' });
  const [withOptions, setWithOptions] = useState(false);
  const [options, setOptions] = useState<IOption[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return {
    titleValue,
    descriptionValue,
    mediaValue,
    priceValue,
    discountPriceValue,
    withOptions,
    options,
    setTitleValue,
    setDescriptionValue,
    setMediaValue,
    setPriceValue,
    setDiscountPriceValue,
    setWithOptions,
    setOptions,
    handleSubmit
  };
};
