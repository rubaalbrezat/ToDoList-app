import React, { Component } from 'react'

export class Additem extends Component {
	state ={
		name :'',
		age : ''

	}

	handleChange =(e) =>{
		this.setState({
			[e.target.id] : e. target.value
		})
	}

      handelSubmit =(e) => {
		e.preventDefault();
		console.log(this.state)
	  }
	
	render() {
		return (
			<div>
				<form onSubmit={this.handelSubmit}>
					<input type="text" placeholder="Enter name... " id="name" onChange={this.handleChange} />
					<input type="number" placeholder="Enter age... " id="age" onChange={this.handleChange} />
					<input type="submit" value="Add" />




				</form>
			</div>
		)
	}
}

export default Additem