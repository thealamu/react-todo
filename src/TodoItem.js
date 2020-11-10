import React from 'react'
import './TodoItem.css'

export default function TodoItem(props) {
	function toggled(e) {
		console.log("Toggled")
	}

	return (
		<div id="todoitem">
			<input onChange={toggled} id="checker" type="checkbox" checked={props.model.done}/>
			<p id="content">{props.model.content}</p>
			<div id="clearer" />
		</div>
	)
}
