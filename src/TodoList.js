import React from 'react'
import TodoItem from './TodoItem.js'

export default function TodoList(props) {
	let undone = props.todos.filter(item => !item.done)
	let items = undone.map(item => 
		<li key={item.id}>
			<TodoItem model={item} onChange={props.onChange}/>			
		</li>
	)
	
	return (
		<ul>{items}</ul>
	)
}
