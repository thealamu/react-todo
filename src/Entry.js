import React from 'react'

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
			<div>
				<input onChange={this.updateState} value={this.state.entryText} type="text"/>
				<button onClick={this.addEntry}>Add</button>
			</div>
		)
	}
}
