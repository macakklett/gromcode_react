import React from 'react';
import moment from 'moment';

const Greeting = props => {
  const calculateAge = date => {
    const birthMoment = moment(date);
    const age = moment().diff(birthMoment, 'years');
    return age;
  };

  const age = calculateAge(props.birthDate);

  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I am {age} years old
    </div>
  );
};

export default Greeting;
