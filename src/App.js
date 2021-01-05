import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      { id: '1', name: 'Rich', age: 46 },
      { id: '2', name: 'Joe', age: 22 },
      { id: '3', name: 'Beth', age:19 }
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    }); //execute function on every element in array, return true if right person

    // don't mutate our reference variable. We are just copying our object details into this new Person object
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]); // alternative

    person.name = event.target.value; // just update our new object (the name)

    // now, we update our separate persons array
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} ); // Now, we use React's setState to update our state using the new array... but we avoided direct state mutation
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
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
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
