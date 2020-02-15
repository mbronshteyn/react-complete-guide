import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Jane', age: 45 },
    ],
  };

  render(){
    return (
      <div className="App">
        <h1>Hello world from ReactJS test</h1>
        <button>Switch Name</button>
        <Person name={ this.state.persons[0].name } age= { this.state.persons[0].age }/>
        <Person name={ this.state.persons[1].name } age= { this.state.persons[1].age }>
          My hobby is racing
        </Person>
        <Person name={ this.state.persons[2].name } age= { this.state.persons[2].age }/>
      </div>
    );
  }
}

export default App;
