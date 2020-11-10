import React from 'react'
import TodoItem from './TodoItem.js'

export default function TodoList(props) {
	let undone = props.todos.filter(item => !item.done)
	let items = []

	undone.forEach(item => {
		items.push(
			<>
				<TodoItem model={item} />			
			</>
		)}
	)

	return (
		<>
			{items}
		</>
	)
}
