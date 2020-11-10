import React from 'react'
import './TodoItem.css'

export default function TodoItem(props) {
	return (
		<div id="todoitem">
			<input id="checker" type="checkbox" checked={props.model.done}/>
			<p id="content">{props.model.content}</p>
			<div id="clearer" />
		</div>
	)
}
