import { useEffect, useMemo, useState } from 'react';
import { HandState, HandType } from '../App';
import { SetState } from '../types/SetState';
import Hand from './Hand';

enum StatusEnum {
  WIN = 'win',
  LOSE = 'lose',
  DRAW = 'draw',
}

const Game: React.FC<{
  playerHand: HandType;
  setScore: (n: number) => void;
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
      } else {
        setStatus(StatusEnum.LOSE);
        setWinnerHand(houseHand);
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
    <div className='flex items-center justify-center gap-32 text-center'>
      <div>
        <p className='relative z-10 mb-16 text-3xl font-semibold tracking-widest text-white'>
          YOU PICKED
        </p>
        <Hand type={playerHand} size='lg' ripple={playerHand === winnerHand} />
      </div>
      {status && (
        <div>
          <div className='mb-16 text-3xl font-semibold tracking-widest text-white'></div>
          <div className='relative z-10 flex flex-col items-center justify-center gap-5 text-white md:min-w-[11rem]'>
            <p className='text-5xl font-bold'>{statusText}</p>
            <button
              onClick={() => setPlayerHand('')}
              className='w-full rounded-lg bg-white py-3 font-semibold leading-none tracking-widest text-bgGradientForm transition-colors hover:text-rockGradientFrom'
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      )}
      <div>
        <p className='relative z-10 mb-16 text-3xl font-semibold tracking-widest text-white'>
          THE HOUSE PICKED
        </p>
        <Hand
          type={houseHand}
          size='lg'
          ripple={houseHand ? houseHand === winnerHand : false}
        />
      </div>
    </div>
  );
};

export default Game;
