import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const users = [
  { id: 'id-0', age: 21, name: 'Bob' },
  { id: 'id-1', age: 17, name: 'Tom' },
  { id: 'id-2', age: 18, name: 'Tad' },
  { id: 'id-3', age: 45, name: 'Sam' },
  { id: 'id-4', age: 23, name: 'Sue' },
  { id: 'id-5', age: 19, name: 'Pam' },
  { id: 'id-6', age: 31, name: 'Jim' },
  { id: 'id-7', age: 28, name: 'Ann' },
  { id: 'id-8', age: 24, name: 'Max' },
  { id: 'id-9', age: 22, name: 'Leo' },
  { id: 'id-10', age: 29, name: 'Amy' },
  { id: 'id-11', age: 27, name: 'Zoe' },
  { id: 'id-12', age: 20, name: 'Dan' },
  { id: 'id-13', age: 34, name: 'Roy' },
  { id: 'id-14', age: 39, name: 'Eve' },
  { id: 'id-15', age: 16, name: 'Ben' },
  { id: 'id-16', age: 41, name: 'Kay' },
  { id: 'id-17', age: 36, name: 'Jay' },
  { id: 'id-18', age: 43, name: 'Nia' },
  { id: 'id-19', age: 25, name: 'Ivy' },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, rootElement);
