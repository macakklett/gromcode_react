import React from 'react';

const Mailbox = ({ unReadMessages }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Mailbox</span>
      {unReadMessages.length > 0 && <span className="mailbox__count">{unReadMessages.length}</span>}
    </div>
  );
};

export default Mailbox;
