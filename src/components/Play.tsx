import { HandState } from '../App';
import { SetState } from '../types/SetState';
import Hand from './Hand';
import { BgTriangle } from './svgs';

const Play: React.FC<{
  setHand: SetState<HandState>;
}> = ({ setHand }) => {
  return (
    <div className='relative z-10 grid grid-cols-2 place-items-center gap-y-8 gap-x-20 pb-8 pt-4'>
      <BgTriangle className='absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform' />
      <Hand type='paper' handleClick={setHand} />
      <Hand type='scissors' handleClick={setHand} />
      <div className='col-span-2'>
        <Hand type='rock' handleClick={setHand} />
      </div>
    </div>
  );
};

export default Play;
