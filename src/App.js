import './App.css';
import Entry from './Entry.js';
import React from 'react';
import TodoList from './TodoList.js'
import Completed from './Completed.js'


class App extends React.Component {
  constructor(props) {
	  super(props)
	
	  this.state = {
		  todos: []
	  }
  }

  addEntry = (todoItem) => {
	this.setState(state => (
		{todos: state.todos.concat(todoItem)}
	))
  }

  onTodoChanged = (todoItem) => {
	console.log("Todo Changed:", todoItem)
  }

  render() {
	  return (
		<div className="App">
		  <h1>Todo App</h1>
		  <Entry onAddEntry={this.addEntry} />
		  <TodoList todos={this.state.todos} onChange={this.onTodoChanged}/>
		  <Completed todos={this.state.todos} onChange={this.onTodoChanged}/>
		</div>
	  );
  }
}

export default App;
