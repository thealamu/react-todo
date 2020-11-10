import React from 'react'
import TodoItem from './TodoItem.js'

export default function TodoList(props) {
	return (
		<>
			<TodoItem model={{content: "do stuff", done: true}} />			
		</>
	)
}
