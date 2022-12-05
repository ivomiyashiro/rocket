import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { arrayMoveImmutable } from 'array-move';

interface Props {
  option: { id: number; name: string; values: {id: number; value: string}[]; editing: boolean; };
  handleOptions:Dispatch<SetStateAction<{ id: number; name: string; values: {id: number; value: string}[]; editing: boolean; }[]>>
  handleWithOptions: Dispatch<SetStateAction<boolean>>;
}

export const useNameInput = ({ option, handleOptions, handleWithOptions }: Props) => {

  const [inputError, setInputError] = useState('');
  const [optionValuesErrors, setOptionsValuesErrors] = useState<number[]>([]);

  const handleInputOptionName = (e: ChangeEvent<HTMLInputElement>) => {
    handleOptions(prev => {
      return prev.map(opt => {
        if (opt.id !== option.id) return opt; 

        if (e.target.value === '') {
          setInputError('Option name is required.');
        } else {
          setInputError('');
        }

        return { ...option, name: e.target.value };
      });
    });
  };

  const handleDeleteOption = () => {
    handleOptions(prev => {
      if (prev.length === 1) { 
        handleWithOptions(false);
        return [{ id: 1, name: '', values: [{ id: 1, value: '' }], editing: true }];
      }

      return prev.filter(opt => {
        if (opt.id !== option.id) return opt;
      });
    });
  };

  const handleEditOption = () => {
    let valuesErrors = false;

    if (option.name === '') {
      valuesErrors = true;
      setInputError('Option name is required.');
    }
    
    option.values.forEach((opt, i) => {
      if (i !== 0) return;
      if (opt.value === '') {
        valuesErrors = true;
        setOptionsValuesErrors(prev => ([ ...prev, i ]));
      }
    });

    if (valuesErrors) return;

    handleOptions(prev => {
      return prev.map(opt => {
        if (opt.id !== option.id) return opt; 
        const newValues = opt.values.filter(value => value.value !== '');
        return { ...option, values: newValues, editing: false };
      });
    });
  };

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    handleOptions(prev => {
      return prev.map(opt => {
        if (opt.id !== option.id) return opt;

        return {
          ...opt,
          values: arrayMoveImmutable(opt.values, oldIndex, newIndex)
        };
      });
    });
  };


  return {
    inputError,
    optionValuesErrors,
    setOptionsValuesErrors,
    handleInputOptionName,
    handleDeleteOption,
    handleEditOption,
    onSortEnd
  };
};
