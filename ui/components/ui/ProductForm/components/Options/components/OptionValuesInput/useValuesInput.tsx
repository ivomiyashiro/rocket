import { ChangeEvent, useState, FocusEvent, Dispatch, SetStateAction } from 'react';

interface Props {  
  index: number;
  optValue: { id: number; value: string };
  optID: number;
  isLast: boolean;
  handleErrors: Dispatch<SetStateAction<number[]>>;
  handleValue: Dispatch<SetStateAction<{ id: number; name: string; values: {id: number; value: string}[]; editing: boolean; }[]>>}

export const useValuesInput = ({ index, optID, optValue, isLast, handleValue, handleErrors }: Props) => {

  const [lastWord, setLastWord] = useState('');

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    handleValue(prev => {
      return prev.map(opt => {
        if (opt.id !== optID) return opt; 

        const newValues = opt.values.map(value => {
          if (value.id !== optValue.id) return value;

          if (e.target.value === '') {
            setLastWord(value.value);
            handleErrors(prev => [...prev, index]);
          } else {
            handleErrors(prev => prev.filter(num => num !== index));
          }

          return { ...value, value: e.target.value };
        });

        return { ...opt, values: newValues };
      });
    });
  };

  const handleAddNewOptionValue = () => {
    if (!isLast) return;
    handleValue(prev => {
      return prev.map(opt => {
        if (opt.id !== optID) return opt; 
        return { 
          ...opt, 
          values: [ 
            ...opt.values, 
            {
              id: new Date().valueOf(),
              value: ''
            }
          ] 
        };
      });
    });
  };

  const handleDeleteOption = () => {
    console.log('h');
    handleValue(prev => {
      return prev.map(opt => {
        if (opt.id !== optID) return opt; 

        const newValues = opt.values.filter(value => {
          if (value.id !== optValue.id) return value;
        });

        return { ...opt, values: newValues };
      });
    });
  };

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value !== '') return;

    handleValue(prev => {
      return prev.map(opt => {
        if (opt.id !== optID) return opt; 

        const newValues = opt.values.map(value => {
          if (value.id !== optValue.id) return value;
          handleErrors(prev => prev.filter(num => num !== index));
          return { ...value, value: lastWord };
        });

        return { ...opt, values: newValues };
      });
    });
  };

  return {
    handleInputValue,
    handleAddNewOptionValue,
    handleDeleteOption,
    handleInputBlur
  };
};
