import { ChangeEvent, FocusEvent, KeyboardEvent, ReactElement } from 'react';
import { TriangeUpIcon, TriangleDownIcon } from 'components/icons';

interface Props {
  inputValue: string;
  placeholder: string;
  type: 'email' | 'text' | 'password' | 'number';
  label?: string;
  name?: string;
  id?: string;
  textField?: string | ReactElement;
  withError?: boolean;
  withSpinner?: boolean;
  error: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleIncreaseQuantity?: () => void;
  handleDecreaseQuantity?: () => void;
}

export const Input = ({ 
  inputValue, placeholder,
  type, label = '',
  name = '', id = '',
  withError = true, withSpinner = false,
  textField, error,
  onBlur, onChange, onFocus,
  handleIncreaseQuantity, handleDecreaseQuantity
}: Props) => {

  const INPUT_TYPE = type === 'number' ? 'text' : type;

  const handleInputNumberChange = (e: KeyboardEvent<HTMLInputElement>) => {
    if (type !== 'number') return;
    if (!/[0-9]/.test(e.key)) e.preventDefault();
  };

  return (
    <div className='w-full'>
      { !!label && <label className={ `text-sm mb-1 inline-block ${ !!error ? 'text-red-500' : 'text-gray-600'}` } htmlFor={ id }>{ label }</label> } 
      <div className={ `w-full flex items-center border border-gray-200 bg-gray-100 rounded-md outline outline-transparent ${ !!error ?  'border-red-500 bg-red-100 text-red-500 placeholder-red-400' : 'focus-within:outline-indigo-600'}` }>
        { !!textField && <div className='ml-2 text-gray-600'> { textField } </div> }
        <div className='flex w-full'>
          <input 
            type={ INPUT_TYPE }
            placeholder={ placeholder }
            value={ inputValue }
            name={ name }
            id={ id }
            onBlur={ onBlur }
            onChange={ onChange }
            onFocus={ onFocus }
            onKeyPress={ handleInputNumberChange }
            className='w-full py-2 px-3 rounded-md text-sm bg-transparent outline-none'
          />
          { 
            (withSpinner && type === 'number' && handleDecreaseQuantity && handleIncreaseQuantity) 
            && 
            <div className='flex flex-col h-full'>
              <button type='button' className='flex items-center justify-center bg-gray-200 m-px mr-2px rounded-md w-4 h-4 outline-none' onClick={ handleIncreaseQuantity }>
                <TriangeUpIcon size='12px' />
              </button>
              <button type='button' className='flex items-center justify-center bg-gray-200 m-px mr-2px rounded-md w-4 h-4 outline-none' onClick={ handleDecreaseQuantity }>
                <TriangleDownIcon size='12px' />
              </button>
            </div>
          }
        </div>
      </div>
      { withError && <p className={ `opacity-0 ${ !!error && 'opacity-100' } text-xs text-red-500 mt-1` }>* { error }</p> }
    </div>
  );
};
