import { Dispatch, SetStateAction } from 'react';
import { Input, DashboardCard, TextArea } from 'components/ui';

interface Props {
  titleValue: { value: string, error: string };
  descriptionValue: { value: string, error: string };
  handleTitleValue: Dispatch<SetStateAction<{ value: string, error: string }>>;
  handleDescriptionValue: Dispatch<SetStateAction<{ value: string, error: string }>>;
}

export const TitleAndDescription = ({ 
  titleValue,
  descriptionValue, 
  handleTitleValue, 
  handleDescriptionValue 
}: Props) => {

  return (
    <DashboardCard>
      <Input
        type='text' 
        label='Title'
        placeholder='Short sleev t-shirt'
        inputValue={ titleValue.value }
        error={ titleValue.error }
        handleInputValue={ handleTitleValue }
      />
      <TextArea
        label='Description'
        placeholder=''
        textAreaValue={ descriptionValue.value }
        error={ descriptionValue.error }
        handleTextAreaValue={ handleDescriptionValue }
      />
    </DashboardCard>
  );
};
