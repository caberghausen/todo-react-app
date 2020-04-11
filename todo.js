import React, { Component } from 'react';
import './todo.css';

class Todo extends Component {
  render() {
    return (
        <ul>
        <hr/>
        <li><button><img src="red x.jpg" alt="X"></img></button>Do homework<input type="checkbox"></input></li></ul>
    );
  }
}

export default Todo;
