import React from 'react'
import PropTypes from 'prop-types'

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

CharComponent.propTypes = {
  click: PropTypes.func,
};

export default CharComponent;