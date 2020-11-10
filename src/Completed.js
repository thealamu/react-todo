import React from 'react'
import TodoItem from './TodoItem.js'

export default function Completed(props) {
	let done = props.todos.filter(item => item.done)
	let items = []

	done.forEach(item => {
		items.push(
			<>
				<TodoItem model={item} onChange={props.onChange}/>			
			</>
		)}
	)

	return (
		<>
			{items}
		</>
	)
}
