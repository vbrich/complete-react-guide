import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // The Class-based approach to create components uses a state property for stateful components
  state = {
    persons: [
      { name: 'Rich', age: 46 },
      { name: 'Joe', age: 22 },
      { name: 'Beth', age:11 }
    ],
    otherState: 'some other value'
  };
  
  // This function/method handles our button event and merges new state information
  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Rich', age: 40 },
        { name: 'Joseph', age: 22 },
        { name: 'Beth', age:31 }
      ]
    });
  }

  render() {
    return(
      <div className='App'>
        <h1>I'm a React App!</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I like peanut butter</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
