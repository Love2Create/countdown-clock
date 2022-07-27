import CountdownClock from "./components/CountdownClock";
import { useState } from 'react';

function App() {

  const baseWidth = 430;

  const [clockScale, setClockScale] = useState(1);

  document.addEventListener('resize', () => {
    console.log('resizing');
  });

  console.log('resizing');
  
  return (
      <div>
        <CountdownClock></CountdownClock>
      </div>
  );
}

export default App;
