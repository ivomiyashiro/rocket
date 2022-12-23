import { useContext } from 'react';
import { IProductFormMedia, ProductFormContext } from 'context';
import { ImageCard, SortableContainer, SortableItem } from 'components/ui';

interface Props {
  mediaList: IProductFormMedia[];
  handleClick: () => void;
}

export const WithMedia = ({ mediaList, handleClick }: Props) => {

  const { handleToggleGeneralImageCheckState, handleGeneralImageSortEnd } = useContext(ProductFormContext);

  return (
    <SortableContainer 
      items={ mediaList }
      handleItems={ (e) => handleGeneralImageSortEnd({ e }) }
    >
      <div className='grid w-full gap-4 grid-cols-3 md:grid-cols-4'>
        {
          mediaList.map((image, i) => {
            return (
              <SortableItem key={ i } index={ i } id={ image.id } withGridLayout>
                <ImageCard
                  media={ image }
                  withGridLayout
                  handleCheckState={ () => handleToggleGeneralImageCheckState({ imageID: image.id }) }
                />
              </SortableItem>
            );
          })
        }
        {
          mediaList?.length >= 1 && mediaList?.length < 5
          &&
          <div className='flex items-center justify-center rounded-md border border-dashed border-gray-300 h-dashboard-add-product-image-sm'>
            <button 
              className="rounded-md bg-indigo-200 px-4 py-1 text-xs text-indigo-600 font-medium hover:text-indigo-800"
              type="button" 
              onClick={ handleClick }
            >
              Add
            </button>
          </div>
        }
      </div>
    </SortableContainer>
  );
};
