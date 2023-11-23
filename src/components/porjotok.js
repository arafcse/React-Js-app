import React,{ Component } from 'react'

class Porjotok extends Component{
	constructor(props){
		super(props);
	this.state = {
		website:[

			{name:'PORJOTOK.xyz',founder:'Araf Ahmed'},
			{name:'shop.xyz',founder:'Araf Ahmed'},
			]
		}
	}
	render(){
		
		return ( 
			<div>
			<h2> Please Visit {this.state.website[0].name} Founder {this.state.website[1].founder}</h2>
				<h2> Please Visit {this.state.website[1].name} Founder {this.state.website[1].founder}</h2>
				</div>
			)
	}
 
}

export default Porjotok