import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

import ValidationComponent from "./Assignment2/ValidationComponent";
import CharComponent from "./Assignment2/CharComponent";

import {Button} from 'react-bootstrap';

class App extends Component {

  state = {
    persons: [
      {id: 11111, name: 'Max', age: 28},
      {id: 22222, name: 'Manu', age: 29},
      {id: 33333, name: 'Jane', age: 45},
    ],
    userName: 'default',
    showPersons: false,
    inputText: null,
    fieldLength: 0,
  };

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  userInputHandler = (event) => {
    this.setState({userName: event.target.value});
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  deleteCharHandler = (index) => {
    const chars = this.state.inputText.split('');
    chars.splice(index, 1);
    const inputText = chars.join('');
    this.setState({inputText});
  };

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons});
  };

  fieldLengthHandler = (event) => {
    let field = event.target.value;
    console.log(field.length);
    this.setState({fieldLength: field.length, inputText: field});
  };

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                key={person.id}
                name={person.name}
                age={person.age}/>
            )
          })};
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }
    }

    let chars = null;

    if (this.state.inputText) {
      const charArray = this.state.inputText.split('');
      chars = (
        <div>
          {charArray.map((element, index) => {
            return (
              <CharComponent
                click={() => this.deleteCharHandler(index)}
                element={element}/>
            )
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello world from ReactJS test</h1>

        <Button onClick={() => this.togglePersonsHandler()}> React Button </Button>

        {/*output persons here, either div or null*/}
        {persons}

        <p></p>

        {/*<UserInput oldUserName={this.state.userName} changed={this.userInputHandler}/>*/}
        {/*<UserOutput userName={this.state.userName}/>*/}

        <input type="text" onChange={this.fieldLengthHandler} placeholder='Enter your text'/>
        <p> Text Length: {this.state.fieldLength}</p>

        <ValidationComponent length={this.state.fieldLength}/>

        {chars}

      </div>
    );
  }
}

export default App;
