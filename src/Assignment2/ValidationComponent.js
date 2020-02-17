import React from 'react'

const ValidationComponent = (props) => {

  const length = props.length;

  let tooLong = 'Text is too long';
  let tooShort = 'Text is too short';
  let output = null;

  if (length < 5) {
    output = tooShort;
  } else if (length >= 10) {
    output = tooLong;
  }

  return (
    <div>
      <p>{output}</p>
    </div>
  )
};

export default ValidationComponent;