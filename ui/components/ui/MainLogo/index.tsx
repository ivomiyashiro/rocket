import { RocketIcon } from 'components/icons';
import Link from 'next/link';

interface Props { 
  href?: string;
  textColor?: string;
  iconColor?: string;
}

export const MainLogo = ({ href, textColor = '#000', iconColor = '#000' }: Props) => {
  return (
    <>
      {
        !!href
          ? (
            <Link href={ href }>
              <div className='text-indigo-600 flex items-center gap-1'>
                <RocketIcon size='30px' color={ iconColor } />
                <p className='text-2xl italic font-extrabold' style={ { color: textColor } }>Rocket</p>
              </div>
            </Link>
          )
          : (
            <div className='text-indigo-600 flex items-center gap-1'>
              <RocketIcon size='30px' color={ iconColor } />
              <p className='text-2xl italic font-extrabold' style={ { color: textColor } }>Rocket</p>
            </div>
          )
      }
    </>
  );
};
