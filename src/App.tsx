import { useState } from 'react';
import StartScreen from '@/screens/Start';
import Game from '@/screens/Game';
import EndScreen from '@/screens/End';

const screens = {
  start: 'start',
  game: 'game',
  end: 'end',
} as const

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(screens.game);

  const getScreen = (screen: keyof typeof screens) => {
    if (screen === 'start') {
      return <StartScreen />
    }

    if (screen === 'game') {
      return <Game />
    }

    if (screen === 'end') {
      return <EndScreen />
    }
  }

  return (
    <>
      {getScreen(currentScreen)}
    </>
  );
};

export default App;
