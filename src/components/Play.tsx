import { HandState } from '../App';
import { SetState } from '../types/SetState';
import Hand from './Hand';
import { BgTriangle } from './svgs';

const Play: React.FC<{
  setHand: SetState<HandState>;
}> = ({ setHand }) => {
  return (
    <>
      <div className='relative z-10 hidden grid-cols-2 place-items-center sm:grid'>
        <BgTriangle className='absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 scale-75 transform sm:scale-100' />
        <div className='-translate-x-10 -translate-y-10'>
          <Hand type='paper' handleClick={setHand} />
        </div>
        <div className='translate-x-10 -translate-y-10'>
          <Hand type='scissors' handleClick={setHand} />
        </div>
        <div className='col-span-2'>
          <Hand type='rock' handleClick={setHand} />
        </div>
      </div>
      <div className='relative z-10 grid grid-cols-2 place-items-center sm:hidden'>
        <BgTriangle className='absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 scale-75 transform sm:scale-100' />
        <div className='-translate-x-5 -translate-y-5'>
          <Hand type='paper' size='sm' handleClick={setHand} />
        </div>
        <div className='translate-x-5 -translate-y-5'>
          <Hand type='scissors' size='sm' handleClick={setHand} />
        </div>
        <div className='col-span-2 -translate-y-3'>
          <Hand type='rock' size='sm' handleClick={setHand} />
        </div>
      </div>
    </>
  );
};

export default Play;
