import './App.css';
import Entry from './Entry.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
	  super(props)
	
	  this.state = {
		  todos: []
	  }
  }

  addEntry = (todoItem) => {
	console.log(todoItem)

	this.setState(state => (
		{todos: state.todos.concat(todoItem)}
	))
  }

  render() {
	  return (
		<div className="App">
		  <h1>Todo App</h1>
		  <Entry onAddEntry={this.addEntry} />
		</div>
	  );
  }
}

export default App;
