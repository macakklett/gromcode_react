import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import Counter from './Counter.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <>
    <Counter start={5} interval={2000} />
    <Counter start={12} interval={100} />
    <Counter start={-21} interval={1000} />
  </>,
  rootElement,
);
