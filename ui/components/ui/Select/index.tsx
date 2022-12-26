import { TriangleDownIcon } from 'components/icons';
import { ChangeEvent, useState } from 'react';

interface Props {
  id: string;
  label?: string;
  options: string[];
  onChange?: () => void;
}

export const Select = ({ id, label, options, onChange }: Props) => {

  const [option, setOption] = useState(options[0]);
  const [isFocus, setFocus] = useState(false);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
    setFocus(false);
  };

  return (
    <div className={ `relative border border-gray-200 bg-gray-100 h-[36px] rounded-md ${ isFocus && 'outline outline-indigo-600' }` }>
      { !!label && <p>label</p> }
      <select 
        id={ id } 
        onChange={ (e) => { handleSelectChange(e); !!onChange && onChange(); } } 
        onFocus={ () => setFocus(true) }
        onBlur={ () => setFocus(false) }
        className="absolute top-0 w-full h-full opacity-0"
      >
        { options.map((opt, i) => <option key={ i }>{ opt }</option>) }
      </select>
      <div className='h-full flex items-center justify-between px-3 text-sm'>
        <span>{ option }</span>
        <TriangleDownIcon size='16px' />
      </div>
    </div>
  );
};
