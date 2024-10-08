import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock location="London" offset={0} />
      <Clock location="Kiev" offset={2} />
      <Clock location="New York" offset={5} />
    </>
  );
};

export default App;
