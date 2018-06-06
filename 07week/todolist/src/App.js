import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userHasClicked: 0,
    }
  }
  handleButtonClick=()=>{
    console.log('click');
    this.setState({userHasClicked: this.state.userHasClicked +1})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Texas</h1>
        </header>
        <p className="App-intro" style={{backgroundColor: 'lightblue'}}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleButtonClick}>Click Me!</button>
        {this.state.userHasClicked}
      </div>
    );
  }
}

export default App;
