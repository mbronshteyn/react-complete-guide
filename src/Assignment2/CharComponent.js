import React from 'react'

const CharComponent = (props) => {

  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
    cursor: 'pointer'
  };

  console.log('props', props);

  return (
    <div style={style}>
      <p onClick={props.click}> {props.element} </p>
    </div>
  )
};

export default CharComponent;