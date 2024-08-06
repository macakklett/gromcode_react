import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]);

  return (
    user && (
      <div className="user">
        <img src={user.avatar_url} className="user__avatar" alt="User Avatar" />
        <div className="user__info">
          <span className="user__name">{user.name}</span>
          <span className="user__location">{user.location}</span>
        </div>
      </div>
    )
  );
};

export default User;
