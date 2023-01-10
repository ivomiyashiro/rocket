import { TriangleDownIcon } from 'components/icons';
import { ChangeEvent, ReactNode, useState } from 'react';

interface Props {
  id: string;
  icon?: ReactNode;
  value?: string | number;
  label?: string;
  options: string[];
  onChange?: any;
}

export const Select = ({ id, label, options, icon: Icon, value, onChange }: Props) => {

  const [isFocus, setFocus] = useState(false);

  return (
    <div className={ `relative border border-gray-200 bg-gray-100 h-full rounded-md ${ isFocus && 'outline outline-indigo-600' }` }>
      { !!label && <p>label</p> }
      <select 
        id={ id } 
        onChange={ (e) => { setFocus(false); !!onChange && onChange(e); } } 
        onFocus={ () => setFocus(true) }
        onBlur={ () => setFocus(false) }
        defaultValue={ value }
        className="absolute top-0 w-full h-full opacity-0"
      >
        { options.map((opt, i) => <option key={ i }>{ opt }</option> ) }
      </select>
      <div className='h-full flex items-center gap-3 justify-between px-3 text-sm overflow-hidden'>
        <div className='flex gap-2 text-gray-600'>
          { !!Icon && <div className='mr-1'> { Icon } </div> }
          <span className='whitespace-nowrap capitalize'>{ value?.toString().toLocaleLowerCase() }</span>
        </div>
        <TriangleDownIcon size='16px' />
      </div>
    </div>
  );
};
