import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      count: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange (e) {
    var lenghtChar = e.target.value.length
    this.setState({count:lenghtChar})
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange= {this.handleChange}></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }
}

export default App;
