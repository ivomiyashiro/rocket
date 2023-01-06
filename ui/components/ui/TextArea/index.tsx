import { ChangeEvent } from 'react';

interface Props {
  textAreaValue: string;
  placeholder: string;
  label?: string;
  name?: string;
  id?: string;
  error: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({ 
  textAreaValue, 
  placeholder,
  label = '',
  name = '',
  id = '',
  error, 
  onChange
}: Props) => {
  return (
    <div className='w-full'>
      <label className={ `text-sm mb-1 inline-block ${ !!error ? 'text-red-500' : 'text-gray-600'}` } htmlFor={ id }>{ label }</label>
      <textarea 
        placeholder={ placeholder }
        value={ textAreaValue }
        name={ name }
        id={ id }
        onChange={ onChange }
        className={ `border border-gray-200 bg-gray-100 w-full py-2 px-3 rounded-md resize-none h-32 outline outline-transparent text-sm
          ${ !!error &&  'border-red-500 bg-red-100 text-red-500 placeholder-red-400'} 
          ${ !!error ? 'focus:outline-red-500' : 'focus:outline-indigo-600' }
          ` 
        }
      />
      <p className={ `opacity-0 ${ !!error && 'opacity-100' } text-xs text-red-500 mt-1` }>* { error }</p>
    </div>
  );
};
