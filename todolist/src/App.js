import React, { Component } from 'react'
import Additem from './Components/Additem'
import Todoitem from './Components/Todoitem'



export class App extends Component {
	state = {
		items: [
			{ id: 1, name: 'Robi', age: 22 },
			{ id: 2, name: 'Ruba', age: 23 },
			{ id: 3, name: 'Reem', age: 24 }
		]
	}

	deleteItem = (id) => {
		let items = this.state.items.filter(item => {
			return item.id !== id

		})
		this.setState(
			{ items }
		)
	}
  
	

	render() {
		return (
			<div className='App'>
				Todo list app
				<Todoitem items={this.state.items} deleteItem={this.deleteItem} />
				<Additem />

			</div>
		)
	}
}

export default App

