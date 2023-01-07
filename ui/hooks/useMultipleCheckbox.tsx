import { useEffect, useState } from 'react';

interface Props { items: any[] }

export const useMultipleCheckbox = ({ items }: Props) => {
  const [mainCheckbox, setMainCheckbox] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(items.length).fill(false)
  );

  useEffect(() => {
    if (checkedState.includes(false)) {
      setMainCheckbox(false);
    }

    if (checkedState.every(val => val === true)) {
      setMainCheckbox(true);
    }
  }, [checkedState]);
  

  const handleCheckboxChange = ({ position }: { position: number }) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const handleMainCheckboxChange = () => {
    if (mainCheckbox === false) {
      const updatedCheckedState = checkedState.map(item => true);
      setMainCheckbox(true);
      return setCheckedState(updatedCheckedState);
    }

    setMainCheckbox(false);
    const updatedCheckedState = checkedState.map(item => false);
    return setCheckedState(updatedCheckedState);
  };

  const handleDeleteCheckbox = () => {
    const updatedCheckedState = checkedState.filter(item => item !== true);
    setCheckedState(updatedCheckedState);
  };

  const handleResetCheckbox = () => {
    const updatedCheckedState = checkedState.map(item => false);
    setCheckedState(updatedCheckedState);
    setMainCheckbox(false);
  };

  return {
    checkedState,
    mainCheckbox,
    handleCheckboxChange,
    handleMainCheckboxChange,
    handleDeleteCheckbox,
    handleResetCheckbox
  };
};
  
