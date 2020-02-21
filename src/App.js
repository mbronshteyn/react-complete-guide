import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Message from './JsonList/Message'

import ValidationComponent from "./Assignment2/ValidationComponent";
import CharComponent from "./Assignment2/CharComponent";

import {Button} from 'react-bootstrap';
import axios from "axios";

class App extends Component {

  state = {
    persons: [
      {id: 11111, name: 'Max', age: 28},
      {id: 22222, name: 'Manu', age: 29},
      {id: 33333, name: 'Jane', age: 45},
    ],
    userName: 'default',
    showPersons: false,
    fieldLength: 0,
    loading: false,
  };

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  getNewMessage = async () => {

    this.setState({loading: true});

    let {data} = await axios.get('http://api.icndb.com/jokes/random');

    this.setState({
      joke: data.value.joke.replace(/&quot;/g, '\"')
    });

    this.setState({loading: false});
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

    let msg = null;
    if (this.state.joke) {
      msg = (
        <div>
          <p/>
          <Message body={this.state.joke}/>
        </div>
      )
    }

    let {loading} = this.state;

    return (
      <div className="App"><h1>My ReactJS sandbox</h1>

        <Button variant="primary" onClick={() => this.togglePersonsHandler()}>
          Toggle persons
        </Button>

        <p/>

        <Button variant="primary" disabled={loading} onClick={() => this.getNewMessage()}>
          {loading && <i className='fa fa-refresh fa-spin'></i>}
          {loading && <span> Loading Joke</span>}
          {!loading && <span>Get New Joke</span>}
        </Button>

        {msg}


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
