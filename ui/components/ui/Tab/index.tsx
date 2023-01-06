import { Dispatch, ReactNode, SetStateAction } from 'react';

interface Props {
  tabs: string[];
  activeTab: string;
  children: ReactNode;
  handleActiveTab: Dispatch<SetStateAction<string>>;
}

export const Tab = ({ tabs, activeTab, children, handleActiveTab }: Props) => {

  return (
    <div>
      <div className='px-4 border-b'>
        <ul className='flex h-[53px] gap-2'>
          {
            tabs.map((tabName, i) => (
              <li key={ i } className={ `flex items-center border-b-2 border-transparent content-center cursor-pointer hover:text-gray-700 ${ activeTab === tabName ? 'border-b-indigo-600 text-gray-700' : 'text-gray-500 hover:border-b-gray-400'}` } onClick={ () => handleActiveTab(tabName) }>
                <a className='px-[1rem]' id={ tabName } role={ tabName }>
                  <span className='min-w-[3.125rem] relative'>
                    <span className='text-sm'> { tabName } </span>
                  </span>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      <div> { children } </div>
    </div>
  );
};
