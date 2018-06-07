import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: '',
      date: Date(),
    }
  };

//User has to add things using input text field
//Show user updated list

handleInputChange=(event)=>{
  this.setState({inputValue: event.target.value})
};

handleClear=()=>{
  this.setState({inputValue: ''})
};

handleSubmit=()=>{
  const newList = this.state.list;
  newList.push(this.state.inputValue);
  this.setState({list:newList, inputValue: ''});
  newList.push(this.state.date);
  this.setState({date: Date()});
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Grocery List</h1>
        </header>
        <p className="App-intro" style={{backgroundColor: 'lightblue'}}></p>
        <input onChange={this.handleInputChange} type='text' value= {this.state.inputValue}/>
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.handleClear}>Clear</button>
        {this.state.list.map((item) =>{
            return <p>{item}</p>
        })}
      </div>
    );
  }
}

export default App;
