import React from "react";

const Todoitem =(props) => {
	const {items , deleteItem} = props;
	let length = items.length;
	
	const ListItems = items.length ?(
		items.map(item => {
			return(
				<div key={item.id}>
					<span>{item.name}</span>
					<span>{item.age}</span>
					 <span onClick={() => deleteItem(item.id)}>&times;</span> 
				</div>
			)
		})
	) :(
		<p>There is no item to show</p>
	)

	return(
		<div>
			<div className="ListItems">
				<span>Name</span>
				<span>Age</span>
				<span>Action</span>
			</div>
			{ListItems}
		</div>
	)
}
export default Todoitem;