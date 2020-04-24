import React, { Component } from 'react';
import './App.css';
import Todo from './todo';
import NewTodo from './NewTodo';

var api_key = "63d533-c6c784-dd52bf-a26a8b-193b55";
let self = null;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        id: "abcde",
        completed: false,
        text: "first todo",
        removeDeletedTodo: "idk"}
      ],
      input: "",
    };
    this.addTodo = this.addTodo.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  //GET todos
  componentDidMount() {
      self = this;
      let todosload = this.state.todos;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              todosload = JSON.parse(this.responseText);
              todosload.sort(function (a, b) {
                return a.text.localeCompare(b.text);
              })
              self.setState({todos: todosload});
          }
      };
      xhttp.open("GET", "https://cse204.work/todos", true);
      xhttp.setRequestHeader("x-api-key",api_key);
      xhttp.send();
  }

  //add a todo
  addTodo(event) {
    event.preventDefault();
    self = this;
    if(self.state.input.length > 0){
      // Setting variable for form input (get from HTML form)
      var todo_data = {
          text: self.state.input
      }

      // Initalize AJAX Request
      var xhttp2 = new XMLHttpRequest();
      // Response handler
      xhttp2.onreadystatechange = function() {
          // Wait for readyState = 4 & 200 response
          if (this.readyState == 4 && this.status == 200) {
              self.setState({
                todos: [...self.state.todos, JSON.parse(this.responseText)]
              });
              //resort the updated todo list
              const newtodolist = self.state.todos;
              newtodolist.sort(function (a, b) {
                return a.text.localeCompare(b.text);
              })
              self.setState({
                todos: newtodolist
              })
              // clear the input field
              self.setState({input: ''});
          } else if (this.readyState == 4) {
              // this.status !== 200, error from server
              console.log(this.responseText);
          }
      };
      console.log(self.state.todos);

      xhttp2.open("POST", "https://cse204.work/todos", true);
      xhttp2.setRequestHeader("Content-type", "application/json");
      xhttp2.setRequestHeader("x-api-key", api_key);
      xhttp2.send(JSON.stringify(todo_data));
    }
  
  }
  onChange(event){
    self.setState({
      input: event.target.value
    });
  }

  removeDeletedTodo(id){
    var xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(id+" removed");
            console.log(self);
            const remainingTodos = self.state.todos.filter((todo) => {
              // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo we want to delete, keep it
              if (todo.id !== id) {
                return todo;
              }
            });
            self.setState({
              todos: remainingTodos
            })
        }
    };
    var url = "https://cse204.work/todos/";
    url += id;
    xhttp3.open("DELETE", url, true);
    xhttp3.setRequestHeader("x-api-key",api_key);
    xhttp3.send();
  }

  completeTodo(id){
    var data = {
        completed: true
    }

    var xhttp4 = new XMLHttpRequest();
    xhttp4.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const newtodolist = self.state.todos;
            const completedone = self.state.todos.find(element => element.id.localeCompare(id)==0);
            const index = self.state.todos.indexOf(completedone);
            console.log(id+" found at: "+index);
            newtodolist[index].completed = true;
            console.log(newtodolist[index]);
            //sort alphabetically
            newtodolist.sort(function (a, b) {
              return a.text.localeCompare(b.text);
            })
            console.log(newtodolist);
            self.setState({
              todos: newtodolist
            })
        }
    };
    var url = "https://cse204.work/todos/";
    url += id;
    xhttp4.open("PUT", url, true);
    xhttp4.setRequestHeader("Content-type", "application/json");
    xhttp4.setRequestHeader("x-api-key", api_key);
    xhttp4.send(JSON.stringify(data));
  }

  render() {
    return (
      <div id="body">
            <div id="header">
                <h1>Quarantine ToDo list</h1>
                <label id="mobile">mobile™️</label>
            </div>
            <div id="addthing">
            <NewTodo addTodo={this.addTodo} newTodo={this.newTodo} onChange={this.onChange} input={this.state.input} />
            </div>
            
            <div>
            <ul id = "todoslist">
              {this.state.todos.map((todo) =>
                <Todo key={todo.id} id={todo.id} completed={todo.completed}
                  text={todo.text} removeDeletedTodo={this.removeDeletedTodo} checkOff={this.completeTodo}/>
              )}
            </ul>
        </div>
        </div>
    );
  }
}

export default App;