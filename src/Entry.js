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

	addEntry = () => {
		let todoItem = {
			content: this.state.entryText,
			done: false
		}

		this.props.onAddEntry(todoItem)
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
