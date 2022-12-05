import { Dispatch, SetStateAction, useState } from 'react';
import { arrayMoveImmutable } from 'array-move';

interface Props {
  handleOptions: Dispatch<SetStateAction<{ id: number; name: string; values: {id: number; value: string}[]; editing: boolean; }[]>>
}

export const useOptionsForm = ({ handleOptions }: Props) => {

  const [lastEditingState, setLastEditingState] = useState(false);

  const handleAddNewOption = () => {
    handleOptions(prev => (
      [
        ...prev,
        { 
          id: new Date().valueOf(), 
          name: '', 
          values: [{ id: new Date().valueOf(), value: '' }], 
          editing: true 
        }
      ]
    ));
  };

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    handleOptions(prev => arrayMoveImmutable(prev, oldIndex, newIndex));

    handleOptions(prev => {
      return prev.map((opt, i) => {
        if (i !== newIndex) return opt; 
        return { ...opt, editing: lastEditingState };
      });
    });
  };

  const onSortStart = ({ index }: any) => {
    handleOptions(prev => {
      return prev.map((opt, i) => {
        if (i !== index) return opt; 

        setLastEditingState(opt.editing);
        return { ...opt, editing: false };
      });
    });
  };

  return {
    handleAddNewOption,
    onSortEnd,
    onSortStart,
  };
};
