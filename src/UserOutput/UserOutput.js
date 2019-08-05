import React from 'react';

const UserOutput = props => {
  return (
    <div>
      <p>Username:</p>
      <p>{props.userName}</p>
    </div>
  );
};

export default UserOutput;
