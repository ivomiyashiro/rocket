import { FormEvent, useState } from 'react';

export const useNewProduct = () => {

  const [titleValue, setTitleValue] = useState({ value: '', error: '' });
  const [descriptionValue, setDescriptionValue] = useState({ value: '', error: '' });
  const [mediaValue, setMediaValue] = useState<{ id?: string; file?: File, fileUrl?: string, isChecked?: boolean }[]>([]);
  const [priceValue, setPriceValue] = useState({ value: '', error: '' });
  const [discountPriceValue, setDiscountPriceValue] = useState({ value: '', error: '' });
  const [withOptions, setWithOptions] = useState(false);
  const [options, setOptions] = useState<{ name: string; values: string[] }[]>([]);

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
