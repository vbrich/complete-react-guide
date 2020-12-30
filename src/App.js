import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      { name: 'Rich', age: 46 },
      { name: 'Joe', age: 22 },
      { name: 'Beth', age:19 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  
  /*
  switchNameHandler = (newName) => {    
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }
  */

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; // Option 1 - reference type (pointer) so constant - not great
    // const persons = this.state.persons.slice(); // Option 2 - get a copy of the array using splice(), which is better than messing with original state object
    const persons = [...this.state.persons]; // Option 3 - spread operator to get list of elements and put it in this array
    persons.splice(personIndex, 1); // remove 1 element from the array
    this.setState({persons: persons}); 
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); // merge this into the state
  }

  // Everything executed here when React goes to re-render the screen
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      // persons holds my JSX code that I can inject to be returned. Because we are outside Render(), I can just write pure JS.
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}/>
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
