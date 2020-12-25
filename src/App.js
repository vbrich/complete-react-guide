// import React from 'react'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <p>This is really working...</p>
    </div>

    // React is doing this with the JSX for us...
    // - The code above is NOT HTML, but JSX
    // - It is just doing this, but JSX helps remove the cumbersome effort of doing this
    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'))

    // JSX is Javascript, so we can't use certain keywords. "className" is JSX's variable to compile to "class". 
    // Also, every <div>, etc is actually just the JSX name, but it really looks like HTML. 

    // Normally, we want our JSX to return a single container element (e.g. <div>)
  );
}

export default App;
