import React, { Component } from 'react';
import './App.css';

class App extends Component { 
  constructor (){
    super()
    this.state = {
      userInput: false,
      formInput: ''
    }
  }

  componentDidMount() {
    console.log(this.state.userInput)
  }

  changeUserInput = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({
      userInput: !this.state.userInput,
      formInput: event.target.value
    })
  }

  handleChange = (event) => {
    const {value,name} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* {!this.state.userInput && <button onClick={this.changeUserInput}></button>} */}
          <form onSubmit={this.changeUserInput}>
            <input placeholder='enter text here...' value={this.state.formInput} name='formInput' onChange={this.handleChange}></input>
            <button></button>
          </form>
          {this.state.userInput && <h1>Seth</h1>}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
