import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Message from '../components/Message/Message'
import CharComponent from "../Assignment2/CharComponent";

import {Button} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import axios from "axios";

import AuthContext from '../context/auth-context'

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

  // lifecycle methods
  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  loginHandler = () => {
    { /* for now */
    }
    return true;
  };


  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  getNewMessage = async () => {
    try {

      this.setState({loading: true});

      let {data} = await axios.get('http://api.icndb.com/jokes/random');

      this.setState({
        joke: data.value.joke.replace(/&quot;/g, '"')
      });

      this.setState({loading: false});

    } catch (e) {

      console.log(e);
    }
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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={() => this.deletePersonHandler}
            changed={(event) => this.nameChangedHandler}/>
        </div>
      );
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

    let joke = null;
    if (this.state.joke) {
      joke = (
        <div>
          <p/>
          <Message body={this.state.joke}/>
        </div>
      )
    }

    let {loading} = this.state;


    return (
      <div className="App"><h1>{this.props.appTitle}</h1>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}>
          <Button variant="primary" onClick={() => this.togglePersonsHandler()}>
            Toggle persons
          </Button>
        </AuthContext.Provider>

        {/*if persons are there, display it*/}
        {persons}

        <p/>

        <Button variant="primary" disabled={loading} onClick={() => this.getNewMessage()}>
          {loading &&
          <Spinner size="sm" animation="border"/>}
          {loading ? <span>   Loading...</span> : <span>Get New Joke</span>}
        </Button>

        {/*if joke is there, display it*/}
        {joke}


        <p></p>

        {/*<UserInput oldUserName={this.state.userName} changed={this.userInputHandler}/>*/}
        {/*<UserOutput userName={this.state.userName}/>*/}

        {/*<input type="text"*/}
        {/*       onChange={this.fieldLengthHandler}*/}
        {/*       placeholder='Input your text'/>*/}

        {/*<p> Text Length: {this.state.fieldLength}</p>*/}

        {/*<ValidationComponent length={this.state.fieldLength}/>*/}

        {/*{chars}*/}

      </div>
    );
  }
}

export default App;
