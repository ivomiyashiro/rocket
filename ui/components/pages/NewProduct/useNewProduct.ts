import { FormEvent, useState } from 'react';

export const useNewProduct = () => {

  const [titleValue, setTitleValue] = useState({ value: '', error: '' });
  const [descriptionValue, setDescriptionValue] = useState({ value: '', error: '' });
  const [mediaValue, setMediaValue] = useState<{ id?: string; file?: File, fileUrl?: string, isChecked?: boolean }[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };

  return {
    titleValue,
    descriptionValue,
    mediaValue,
    setTitleValue,
    setDescriptionValue,
    handleSubmit,
    setMediaValue
  };
};
