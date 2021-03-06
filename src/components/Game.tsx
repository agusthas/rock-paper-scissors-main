import { useEffect, useMemo, useState } from 'react';
import { HandState, HandType } from '../App';
import { SetState } from '../types/SetState';
import Hand from './Hand';

enum StatusEnum {
  WIN = 'win',
  LOSE = 'lose',
  DRAW = 'draw',
}

const PickedHand: React.FC<{
  hand: HandType | '';
  ripple: boolean;
}> = ({ hand, ripple }) => {
  return (
    <div className='grid grid-flow-row gap-6 sm:gap-16'>
      <p className='relative z-10 order-1 font-semibold tracking-widest text-white sm:order-none sm:text-3xl'>
        YOU PICKED
      </p>
      <div className='hidden sm:block'>
        <Hand type={hand} size='lg' ripple={ripple} />
      </div>
      <div className='sm:hidden'>
        <Hand type={hand} size='sm' ripple={ripple} />
      </div>
    </div>
  );
};

// TODO: can we add animation when we determine houseHand?
const Game: React.FC<{
  playerHand: HandType;
  setScore: SetState<number>;
  setPlayerHand: SetState<HandState>;
}> = ({ playerHand, setPlayerHand, setScore }) => {
  const [houseHand, setHouseHand] = useState<HandState>('');
  const [winnerHand, setWinnerHand] = useState<HandState>('');
  const [status, setStatus] = useState<StatusEnum | ''>('');

  useEffect(() => {
    const choices: HandType[] = ['paper', 'scissors', 'rock'];
    const timer = setTimeout(() => {
      setHouseHand(choices[Math.floor(Math.random() * choices.length)]);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const getResult = () => {
      const rules: Record<HandType, HandType> = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper',
      };

      if (playerHand === houseHand) {
        setStatus(StatusEnum.DRAW);
        return;
      }

      if (houseHand === rules[playerHand]) {
        setStatus(StatusEnum.WIN);
        setWinnerHand(playerHand);
        setScore((p) => p + 1);
      } else {
        setStatus(StatusEnum.LOSE);
        setWinnerHand(houseHand);
        setScore((p) => (p > 0 ? p - 1 : p));
      }
    };

    if (houseHand) {
      getResult();
    }
  }, [houseHand]);

  const statusText = useMemo(() => {
    switch (status) {
      case StatusEnum.WIN:
        return 'YOU WIN';
      case StatusEnum.LOSE:
        return 'YOU LOSE';
      case StatusEnum.DRAW:
        return 'DRAW';
      default:
        return '';
    }
  }, [status]);

  return (
    <div className='flex flex-wrap items-center justify-center gap-x-12 gap-y-0 text-center sm:flex-nowrap sm:gap-32'>
      <PickedHand hand={playerHand} ripple={playerHand === winnerHand} />
      {status && (
        <div className='order-3 sm:order-none'>
          <div className='mb-16 text-3xl font-semibold tracking-widest text-white'></div>
          <div className='relative z-10 flex flex-col items-center justify-center gap-5 text-white md:min-w-[11rem]'>
            <p className='text-7xl font-bold sm:text-5xl'>{statusText}</p>
            <button
              onClick={() => setPlayerHand('')}
              className='w-full rounded-lg bg-white py-4 font-semibold leading-none tracking-widest text-bgGradientForm transition-colors hover:text-rockGradientFrom sm:py-3'
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      )}
      <PickedHand
        hand={houseHand}
        ripple={houseHand ? houseHand === winnerHand : false}
      />
    </div>
  );
};

export default Game;
