import React from 'react'

const JsonMessage = (props) => {

  return (
    <div className='UserOutput'>
      <p>title: {props.title}</p>
      <p>body: {props.body}</p>
    </div>
  );
};

export default JsonMessage;