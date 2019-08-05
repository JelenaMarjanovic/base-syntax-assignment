import React from 'react';

const UserInput = props => {
  return (
    <input type="text" value={props.currentUsername} onChange={props.changed} />
  );
};

export default UserInput;
