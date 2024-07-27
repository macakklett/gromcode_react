import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import GoodButton from './GoodButton.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<GoodButton />, rootElement);
