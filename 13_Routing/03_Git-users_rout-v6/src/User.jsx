import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({
    avatarUrl: null,
    name: null,
    location: null,
  });

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(({ avatar_url, name, location }) =>
        setUser({
          avatarUrl: avatar_url,
          name,
          location,
        }),
      );
  }, [userId]);

  const { avatarUrl, name, location } = user;
  if (avatarUrl === null || name === null || location === null) return null;

  return (
    <div className="user">
      <img src={avatarUrl} className="user__avatar" alt="User Avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

// TODO update solutiuins here

export default User;
