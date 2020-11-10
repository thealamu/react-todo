import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Entry extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			entryText: ""
		}
	}

	updateState = (e) => {
		this.setState({
			entryText: e.target.value
		})
	}

	idgen = () => {
	  return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	}

	addEntry = () => {
		let todoItem = {
			id: this.idgen(),
			content: this.state.entryText,
			done: false
		}

		this.props.onAddEntry(todoItem)
		this.setState({
			entryText: ""
		})
	}

	render() {
		return (
			<div style={{verticalAlign: "middle"}}>
				<TextField onChange={this.updateState} value={this.state.entryText} label="What to do" variant="outlined" size="small"/> 
				<Button style={{marginLeft: "8px", marginTop: "4px"}} onClick={this.addEntry} variant="outlined" color="primary" size="small" disableElevation>
				  Add
				</Button>
			</div>
		)
	}
}
