import { ChangeEvent, Dispatch, SetStateAction } from 'react';
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

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleTitleValue((prev) => ({ ...prev, value: e.target.value }));
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleDescriptionValue((prev) => ({ ...prev, value: e.target.value }));
  };

  return (
    <DashboardCard className='p-5 pb-0'>
      <Input
        type='text' 
        label='Title'
        placeholder='Short sleev t-shirt'
        inputValue={ titleValue.value }
        error={ titleValue.error }
        onChange={ handleTitleChange }
      />
      <TextArea
        label='Description'
        placeholder=''
        textAreaValue={ descriptionValue.value }
        error={ descriptionValue.error }
        onChange={ handleDescriptionChange }
      />
    </DashboardCard>
  );
};
