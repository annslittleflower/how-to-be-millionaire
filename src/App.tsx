import { useState } from 'react';
// import viteLogo from '/vite.svg' from public
import StartScreen from '@/screens/Start/Start';

const App = () => {
  const [isStart] = useState(true);
  // const a = '';

  return <>{isStart ? <StartScreen /> : null}</>;
};

export default App;
