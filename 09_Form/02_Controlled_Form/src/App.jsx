import React from 'react';
import UserForm from './UserForm';

const createUser = userData => {
  console.log(userData);
};

const App = () => {
  return <UserForm onSubmit={createUser} />;
};

export default App;
