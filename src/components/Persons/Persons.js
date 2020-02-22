import React from 'react'
import Person from "./Person/Person";

const persons = (props) => (props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.deletePersonHandler(index)}
        changed={(event) => props.nameChangedHandler(event, person.id)}
        key={person.id}
        name={person.name}
        age={person.age}/>
    )
  })
);

export default persons;