import React from 'react'

const Message = (props) => {

  return (
    <div className='UserOutput'>
      <p> joke: {props.body} </p>
    </div>
  );
};

export default Message;