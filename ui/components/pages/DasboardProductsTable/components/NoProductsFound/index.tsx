
interface Props {
  activeTab: 'All' | 'Active' | 'Draft';
  searchValue: string;
}

export const NoProductsFound = ({ activeTab, searchValue }: Props) => {
  return (
    <>
      {
        searchValue === ''
          ? (
            <div className='py-14 text-center'>
              <h2 className='font-semibold text-lg'>No <span className="lowercase">{ activeTab }</span> products</h2>
              <p className='text-sm text-gray-500 py-4'>
                {
                  activeTab === 'Draft'
                  &&
                  'Set products as draft if they still need work.'
                }
                {
                  activeTab === 'Active'
                  &&
                  'Set products as active when they’re ready to be sold.'
                }
              </p>
            </div>
          )
          : (
            <div className='py-14 text-center'>
              <h2 className='font-semibold text-lg'>No products found</h2>
              <div className="py-4">
                <p className='text-sm text-gray-500'>
                  We could not find &quot;{ searchValue }&quot; in our database. 
                </p>
                <p className='text-sm text-gray-500'>
                  Try changing the search term.
                </p>
              </div>
            </div>
          )
      }
    </>

  );
};
