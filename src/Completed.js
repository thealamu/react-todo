import React from 'react'
import TodoItem from './TodoItem.js'

export default function Completed(props) {
	let done = props.todos.filter(item => item.done)
	let items = done.map(item => 
		<li key={item.id}>
			<TodoItem model={item} onChange={props.onChange}/>			
		</li>
	)

	return (
		<ul>{items}</ul>
	)
}
