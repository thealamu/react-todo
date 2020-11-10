import React from 'react'
import './TodoItem.css'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

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
		<ListItem id="todoitem" key={props.key}>
			<ListItemIcon>	
				<Checkbox onChange={toggled} checked={props.model.done} />
			</ListItemIcon>
			<ListItemText primary={props.model.content} />
		</ListItem>
		/*<div id="todoitem">
			<input onChange={toggled} id="checker" type="checkbox" checked={props.model.done}/>
			<p id="content">{props.model.content}</p>
			<div id="clearer" />
		</div>*/
	)
}
