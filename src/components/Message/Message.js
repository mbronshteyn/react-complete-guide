import React from 'react'
import PropTypes from 'prop-types'

import './Message.css'

const Message = (props) => {

  return (
    <div className='Message'>
      <p> {props.body} </p>
    </div>
  );
};

Message.propTypes = {
  body: PropTypes.string,
};

export default Message;