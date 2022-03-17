import { useState } from 'react';
import Header from './components/Header';
import GameScreen from './components/GameScreen';
import Rules from './components/Rules';
import useLocalStorage from './hooks/useLocalStorage';

export type HandType = 'paper' | 'scissors' | 'rock';

export type HandState = HandType | '';

// TODO: better way to distribute state?
const App = () => {
  const [myHand, setMyHand] = useState<HandState>('');
  const [score, setScore] = useLocalStorage('score', 0);

  return (
    <div className='flex h-screen flex-col bg-gradient-to-b from-bgGradientForm to-bgGradientTo font-sans'>
      <Header score={score} />
      <GameScreen
        playerHand={myHand}
        setPlayerHand={setMyHand}
        setScore={setScore}
      />
      <Rules />
    </div>
  );
};

export default App;
