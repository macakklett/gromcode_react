import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
  return (
    <>
      <Counter start={5} interval={2000} />
      <Counter start={12} interval={100} />
      <Counter start={-21} interval={1000} />
    </>
  );
};

export default App;
