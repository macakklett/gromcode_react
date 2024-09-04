import React from 'react';

const Spinner = ({ size }) => {
  if (size <= 0) return null;
  return <div className="spinner" style={{ height: size + 'px', width: size + 'px' }}></div>;
};

export default Spinner;
