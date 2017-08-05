import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowList from './components/ShowList';
import AddTodo from './components/AddTodo';

class App extends Component {
  constructor () {
    super();
    this.state = {
      todoList:['Go to movies', 'Work out', 'Eat lunch'],
    };
  }

  render() {
    return (
      <div className="App">
        Redux time!
        <AddTodo />
        <ShowList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
