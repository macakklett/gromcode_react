import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './comment.scss';
import App from './App.jsx';
import Comment from './Comment.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Comment />, rootElement);
