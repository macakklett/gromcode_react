import React from 'react';

const NumbersList = ({ numbers }) => {
  return (
    <ol>
      {numbers.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ol>
  );
};

export default NumbersList;
