import React, { Component } from 'react';
import './todo.css';

class Todo extends Component {
  render() {
    return (
      <div id="">
        <hr></hr>
        <li><button><img src="red_x.jpg" alt="X"></img></button>Todo text<input type="checkbox"></input></li>
      </div>
    );
  }
}

export default Todo;