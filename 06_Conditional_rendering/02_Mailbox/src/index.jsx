import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Mailbox from './Mailbox';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Mailbox unreadMessages={['hi', 'where', 'are', 'you']} />, rootElement);
