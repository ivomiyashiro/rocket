import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface Props {
  inputValue: string;
  placeholder: string;
  type: 'email' | 'text' | 'password' | 'number';
  name?: string;
  error: string;
  handleInputValue: Dispatch<SetStateAction<{ value: string, error: string }>>;
}

export const Input = ({ 
  inputValue, 
  placeholder,
  type,
  name = '',
  error, 
  handleInputValue 
}: Props) => {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputValue((prev) => ({ ...prev, value: e.target.value }));
  };

  return (
    <div className='w-full'>
      <input 
        type={ type }
        placeholder={ placeholder }
        value={ inputValue }
        name={ name }
        onChange={ handleInputChange }
        className={ `border border-gray-200 bg-gray-100 w-full py-2 px-3 rounded-md 
          ${ !!error &&  'border-red-500 bg-red-100 text-red-500'}
          focus:border-red-500 focus:border-2
          ` 
        }
      />
      <p className={ `opacity-0 ${ !!error && 'opacity-100' } text-sm text-red-500 mt-1` }>* { error }</p>
    </div>
  );
};
