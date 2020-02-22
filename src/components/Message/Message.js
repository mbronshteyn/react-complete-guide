import React from 'react'

import './Message.css'

const Message = (props) => {

  return (
    <div className='Message'>
      <p> {props.body} </p>
    </div>
  );
};

export default Message;