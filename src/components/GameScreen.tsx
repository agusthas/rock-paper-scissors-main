import { HandState } from '../App';
import { SetState } from '../types/SetState';
import Game from './Game';
import Play from './Play';

const GameScreen: React.FC<{
  playerHand: HandState;
  setPlayerHand: SetState<HandState>;
  setScore: SetState<number>;
}> = ({ playerHand, setPlayerHand, setScore }) => {
  return (
    <main className='flex flex-1 items-center justify-center'>
      {playerHand ? (
        <Game
          playerHand={playerHand}
          setPlayerHand={setPlayerHand}
          setScore={setScore}
        />
      ) : (
        <Play setHand={setPlayerHand} />
      )}
    </main>
  );
};

export default GameScreen;
