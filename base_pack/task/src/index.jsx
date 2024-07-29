import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumbersList from './NumbersList';

const rootElement = document.querySelector('#root');

ReactDOM.render(<NumbersList numbers={[1, 5, 9, 4, 3]} />, rootElement);
