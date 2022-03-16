import { useState } from 'react';
import Game from './components/Game';
import Header from './components/Header';
import Play from './components/Play';

export type HandType = 'paper' | 'scissors' | 'rock';

export type HandState = HandType | '';

const App = () => {
  const [myHand, setMyHand] = useState<HandState>('');
  const [score, setScore] = useState(0);

  return (
    <div className='flex h-screen flex-col bg-gradient-to-b from-bgGradientForm to-bgGradientTo font-sans'>
      <Header score={score} />
      <main className='flex flex-1 items-center justify-center'>
        {myHand ? (
          <Game
            playerHand={myHand}
            setPlayerHand={setMyHand}
            setScore={setScore}
          />
        ) : (
          <Play setHand={setMyHand} />
        )}
      </main>
    </div>
  );
};

export default App;
