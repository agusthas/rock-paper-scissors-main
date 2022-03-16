import { Logo } from './svgs';

const Header: React.FC<{ score: number }> = ({ score }) => {
  return (
    <div className='w-full p-12'>
      <header className='mx-auto flex max-w-[720px] items-center justify-between rounded-xl border-2 border-headerOutline py-4 px-6'>
        <Logo />
        <div className='flex flex-col items-center justify-center rounded-lg bg-white py-4 px-10 font-semibold'>
          <p className='text-lg uppercase tracking-widest text-textScore'>
            SCORE
          </p>
          <p className='text-6xl font-bold text-textDark'>{score}</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
