import React from 'react';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time }) => {
  const date = moment(time).format('DD MMM');
  const transactionTime = moment(time).format('HH:mm');
  const formattedAmount = new Intl.NumberFormat('en-GB').format(amount);

  return (
    <li className="transaction">
      <span className="transaction__date">{date}</span>
      <span className="transaction__time">{transactionTime}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formattedAmount}</span>
    </li>
  );
};

export default Transaction;
