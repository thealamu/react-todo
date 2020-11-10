import React from 'react'

export default function TodoItem(props) {
	return (
		<div>
			<input type="checkbox" checked={props.model.done}/>
			<p>{props.model.content}</p>
		</div>
	)
}
