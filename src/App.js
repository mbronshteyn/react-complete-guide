import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Jane', age: 45},
    ],
    userName: 'default',
  };

  switchNameHandler = (newName) => {
    console.log(newName + ' was clicked');
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Jane', age: 45},
      ]
    })
  };

  userInputHandler = (event) => {
    this.setState({userName: event.target.value});
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Jane', age: 45},
      ]
    });
  };

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello world from ReactJS test</h1>
        <button style={style}
                onClick={() => this.switchNameHandler('Maximilian')}>
          Switch Name
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>
          My hobby is racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <UserInput oldUserName={this.state.userName} changed={this.userInputHandler}/>
        <UserOutput userName={this.state.userName}/>
      </div>
    );
  }
}

export default App;
