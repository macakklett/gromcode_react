import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const setStatusOnline = () => setIsOnline(true);
    const setStatusOffline = () => setIsOnline(false);

    window.addEventListener('online', setStatusOnline);
    window.addEventListener('offline', setStatusOffline);

    return () => {
      window.removeEventListener('online', setStatusOnline);
      window.removeEventListener('offline', setStatusOffline);
    };
  }, []);

  const classList = isOnline ? 'status' : 'status status_offline';
  return <div className={classList}>{isOnline ? 'online' : 'offline'}</div>;
};

export default ConnectionStatus;
