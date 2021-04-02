import React, { Component } from 'react';
import './todo.css';
import x from './red_x.jpg';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state=({
      id: this.id
    })
  }
  render() {
    var className = "";
    if(this.props.completed){
      className = "checked";
    }
    return (
      <div>
        <hr></hr>
        <li className={className}><button onClick={()=>this.props.removeDeletedTodo(this.props.id)}><img src={x} alt="o"></img></button>{this.props.text}<input type="checkbox" onClick={()=>this.props.checkOff(this.props.id)} checked={this.props.completed}></input></li>
      </div>
    );
  }
}

export default Todo;