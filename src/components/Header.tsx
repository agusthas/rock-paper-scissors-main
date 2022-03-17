import { Logo, LogoSm } from './svgs';

const Header: React.FC<{ score: number }> = ({ score }) => {
  return (
    <div className='w-full p-6 sm:p-12'>
      <header className='mx-auto flex max-w-[720px] items-center justify-between rounded-lg border-2 border-headerOutline p-3 sm:rounded-xl sm:py-4 sm:px-6'>
        <div className='hidden sm:block'>
          <Logo />
        </div>
        <div className='block pl-3 sm:hidden'>
          <LogoSm />
        </div>
        <div className='flex flex-col items-center justify-center rounded-md bg-white py-3 px-7 font-semibold sm:rounded-lg sm:py-4 sm:px-10'>
          <p className='text-xs uppercase tracking-widest text-textScore sm:text-lg'>
            SCORE
          </p>
          <p className='text-5xl font-bold leading-none text-textDark sm:text-6xl'>
            {score}
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
