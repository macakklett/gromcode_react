import React from 'react';
import ReactDOM from 'react-dom';
import UserTable from './UserTable';

import './index.scss';

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-5',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-6',
    age: 45,
    name: 'Sam',
  },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UserTable users={users} />, rootElement);
