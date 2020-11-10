import React from 'react'
import TodoItem from './TodoItem.js'
import List from '@material-ui/core/List';
import './TodoList.css'

export default function TodoList(props) {
	let undone = props.todos.filter(item => !item.done)
	let items = undone.map(item => 
		<TodoItem key={item.id} model={item} onChange={props.onChange}/>			
	)
	
	return (
		<div id="hc">
			<List>{items}</List>
		</div>
	)
}
