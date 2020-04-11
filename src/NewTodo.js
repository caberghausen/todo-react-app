import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
        <div id="addthing">
        <form id="input">
          <input id="newtodo" type="text" />
          <input id="newbtn" type="submit" value="+ add todo"/>
        </form>
        </div>
    );
  }
}

export default NewTodo;