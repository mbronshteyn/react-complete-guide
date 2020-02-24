import React, {useEffect, useRef} from 'react'

import './Person.css'

const person = (props) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRef = useRef(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className='Person'>
      <p onClick={props.click}>I'am {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" ref={inputRef} onChange={props.changed} defaultValue={props.name}/>
    </div>
  );
};

export default person;