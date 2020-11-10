import React from 'react'
import TodoItem from './TodoItem.js'
import List from '@material-ui/core/List';

export default function Completed(props) {
	let done = props.todos.filter(item => item.done)
	let items = done.map(item => 
		<TodoItem key={item.id} model={item} onChange={props.onChange}/>			
	)

	return (
		<>
			{ items.length !== 0 && <h6>Completed</h6> }
			<div id="hc">
				<List>{items}</List>
			</div>
		</>
	)
}
