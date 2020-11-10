import React from 'react'
import './TodoItem.css'

export default function TodoItem(props) {
	function toggled(e) {
		console.log(props.model, "toggled")
		props.onChange({
			id: props.model.id,
			content: props.model.content,
			done: !props.model.done
		})
	}

	return (
		<div id="todoitem">
			<input onChange={toggled} id="checker" type="checkbox" checked={props.model.done}/>
			<p id="content">{props.model.content}</p>
			<div id="clearer" />
		</div>
	)
}
