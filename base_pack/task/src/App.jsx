import React, { useEffect, useState } from 'react';
import Header from './Header';
import { UserDataContext } from './user-data-context';

const App = () => {
  const [userData, setUserData] = useState({
    name: 'User',
    avatar_url: '',
  });

  useEffect(() => {
    setUserData({
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    });
  }, []);

  return (
    <div className="page">
      <UserDataContext.Provider value={userData}>
        <Header />
      </UserDataContext.Provider>
    </div>
  );
};

export default App;
