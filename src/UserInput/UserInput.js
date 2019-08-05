import React from 'react';

const UserInput = props => {
  const style = {
    padding: '8px',
    margin: '16px',
    border: '3px solid blueviolet'
  };

  return (
    <input
      type="text"
      style={style}
      value={props.currentUsername}
      onChange={props.changed}
    />
  );
};

export default UserInput;
