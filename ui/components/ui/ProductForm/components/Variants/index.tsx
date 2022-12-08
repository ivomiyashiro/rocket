import { IOption } from 'interfaces';
import { useVariants } from './useVariants';
import { DashboardCard } from 'components/ui';
import { VariantTableRow } from './VariantTableRow';

interface Props { options: IOption[]; }

export const Variants = ({ options }: Props) => {

  const { variants, setVariants } = useVariants({ options });

  return (
    <>
      {
        variants.length !== 0
        &&
        <DashboardCard title='Variants' className='p-5'>
          <div className='overflow-x-auto overscroll-x-contain'>
            <table className='w-full min-w-full border-collapse'>
              <thead>
                <tr>
                  <th className='text-xs font-normal text-gray-600 text-left whitespace-nowrap p-3 sticky left-0 bg-white'> Media </th>
                  <th className='text-xs font-normal text-gray-600 text-left whitespace-nowrap p-3'> Variant </th>
                  <th className='text-xs font-normal text-gray-600 text-left whitespace-nowrap p-3'> Price </th>
                  <th className='text-xs font-normal text-gray-600 text-left whitespace-nowrap p-3'> Compare price </th>
                  <th className='text-xs font-normal text-gray-600 text-left whitespace-nowrap p-3'> Quantity </th>
                  <th className='text-xs font-normal text-gray-600 text-left whitespace-nowrap p-3'> SKU </th>
                  <th className='text-xs font-normal text-gray-600 text-left whitespace-nowrap p-3'> Barcode </th>
                </tr>
              </thead>
              <tbody>
                {
                  variants.map((variant, i) => {
                    return (
                      <VariantTableRow 
                        key={ i }
                        variant={ variant }
                        handleVariants={ setVariants }
                      />
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </DashboardCard>
      }
    </>
  );
};
