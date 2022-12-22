import { useContext } from 'react';
import { Input, DashboardCard, TextArea } from 'components/ui';
import { ProductFormContext } from 'context';

export const TitleAndDescription = () => {

  const { title, description, handleTitleValue, handleDescriptionValue } = useContext(ProductFormContext);

  return (
    <DashboardCard className='p-5 pb-0'>
      <Input
        type='text' 
        label='Title'
        placeholder='Short sleev t-shirt'
        inputValue={ title.value }
        error={ title.error }
        onChange={ handleTitleValue }
      />
      <TextArea
        label='Description'
        placeholder=''
        textAreaValue={ description.value }
        error={ description.error }
        onChange={ handleDescriptionValue }
      />
    </DashboardCard>
  );
};
