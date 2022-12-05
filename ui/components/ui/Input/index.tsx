import { ChangeEvent, FocusEvent, KeyboardEvent, KeyboardEventHandler, ReactElement } from 'react';

interface Props {
  inputValue: string;
  placeholder: string;
  type: 'email' | 'text' | 'password' | 'number';
  label?: string;
  name?: string;
  id?: string;
  textField?: string | ReactElement;
  error: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ 
  inputValue, 
  placeholder,
  type,
  label = '',
  name = '',
  id = '',
  textField,
  error,
  onBlur,
  onChange,
}: Props) => {

  const INPUT_TYPE = type === 'number' ? 'text' : type;

  const handleInputNumberChange = (e: KeyboardEvent<HTMLInputElement>) => {
    if (type !== 'number') return;
    if (!/[0-9]/.test(e.key)) e.preventDefault();
  };

  return (
    <div className='w-full'>
      { !!label && <label className={ `text-sm mb-1 inline-block ${ !!error ? 'text-red-500' : 'text-gray-600'}` } htmlFor={ id }>{ label }</label> } 
      <div className={ `flex items-center border border-gray-200 bg-gray-100 rounded-md outline outline-transparent ${ !!error ?  'border-red-500 bg-red-100 text-red-500 placeholder-red-400' : 'focus-within:outline-indigo-600'}` }>
        { !!textField && <div className='ml-2 text-gray-600'> { textField } </div> }
        <input 
          type={ INPUT_TYPE }
          placeholder={ placeholder }
          value={ inputValue }
          name={ name }
          id={ id }
          onBlur={ onBlur }
          onChange={ onChange }
          onKeyPress={ handleInputNumberChange }
          className='w-full py-2 px-3 rounded-md text-sm bg-transparent outline-none'
        />
      </div>
      <p className={ `opacity-0 ${ !!error && 'opacity-100' } text-xs text-red-500 mt-1` }>* { error }</p>
    </div>
  );
};
