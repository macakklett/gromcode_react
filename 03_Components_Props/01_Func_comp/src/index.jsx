import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './search.scss';
import App from './App.jsx';
import Search from './Search.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Search name="Tom" />, rootElement);
