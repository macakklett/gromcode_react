import React from 'react';
import moment from 'moment';

const Profile = ({ userData }) => {
  const formatDate = date => moment(date).format('DD MMM YY');

  return (
    <div className="profile">
      <div className="profile__name">
        {userData.firstName} {userData.lastName}
      </div>
      <div className="profile__birth">
        {`Was born ${formatDate(userData.birthDate)} in ${userData.birthPlace}`}
      </div>
    </div>
  );
};

export default Profile;
