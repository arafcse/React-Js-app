import React,{ Component } from 'react'

class Porjotok extends Component{
	constructor(props){
		super(props);
	this.state = {
		website:[

			{name:'PORJOTOK.xyz',founder:'Araf'},
			{name:'shop.xyz',founder:'Ahmed'},
			]
		}
	}
clickHandler = () => {
	console.log('Hello ARAF');
	alert('Welcome PORJOTOK')
}

	render(){
		
		return ( 
			<div>
				<button onClick={this.clickHandler}>Click Here</button>
			<h2> Please Visit {this.state.website[0].name} Founder {this.state.website[1].founder}</h2>
				</div>
			)
	}
 
}

export default Porjotok