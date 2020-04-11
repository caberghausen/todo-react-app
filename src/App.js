import React, { Component } from 'react';
import './App.css';
import Todo from './todo';
import NewTodo from './NewTodo';

class App extends Component {
  render() {
    return (
      <div id="body">
            <div id="header">
                <h1>Quarantine ToDo list</h1>
            </div>
            <div id="addthing">
                <NewTodo />
            </div>
            
            <div>
            <ul id = "todoslist">
                <Todo />
            </ul>
        </div>
        </div>
    );
  }
}

export default App;