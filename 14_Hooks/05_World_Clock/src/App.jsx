import React, { useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [isToggle, setIsToggle] = useState(true);

  return (
    <>
      <div>
        <button onClick={() => setIsToggle(!isToggle)}>Toggle</button>
      </div>

      {isToggle && (
        <>
          <Clock location="London" offset={0} />
          <Clock location="Kiev" offset={2} />
          <Clock location="New York" offset={5} />
        </>
      )}
    </>
  );
};

export default App;
