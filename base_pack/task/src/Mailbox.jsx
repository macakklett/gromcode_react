import React from 'react';

const Mailbox = ({ unReadMessages }) => {
  return (
    <div className="mailbox">
      <div className="mailbox__text">Mailbox</div>
      {unReadMessages.length > 0 && <div className="mailbox__count">{unReadMessages.length}</div>}
    </div>
  );
};

export default Mailbox;
