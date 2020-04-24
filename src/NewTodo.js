import React, { Component } from 'react';
import './App.css';

class NewTodo extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <div id="addthing">
        <form id="input" onSubmit={this.props.addTodo}>
          <input id="newtodo" type="text" value={this.props.input} onChange={this.props.onChange}/>
          <input id="newbtn" type="submit" value="+ add todo"/>
        </form>
        </div>
    );
  }
}

export default NewTodo;