import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
        <img src={logo} className="logo-app"></img>
        <h2>Welcome to out Timer app built with React js</h2>
        </div>
          <p className='App-intro'>
      To get started edit code
        </p>
        <Timer start={Date.now()} />
      </div>
    

    )
}
}

export default App;
