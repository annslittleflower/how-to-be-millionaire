import { useState } from 'react';
import StartScreen from '@/screens/Start';
import Game from '@/screens/Game';
import EndScreen from '@/screens/End';

const App = () => {
  const [isStart] = useState(false);
  const [isPlaying] = useState(true);
  const [isEnd] = useState(false);

  return (
    <>
      {isStart ? <StartScreen /> : null}
      {isPlaying ? <Game /> : null}
      {isEnd ? <EndScreen /> : null}
    </>
  );
};

export default App;
