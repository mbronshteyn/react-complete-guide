import React from 'react'

import './UserInput.css'

const userInput = (props) => {
  return (
    <div className='UserInput'>
      <input type="text" onChange={props.changed} defaultValue={props.oldUserName}/>
    </div>
  );
};

export default userInput;