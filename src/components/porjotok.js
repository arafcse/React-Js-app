import React,{ Component } from 'react'
import './porjotok.css';

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
	// console.log('Hello ARAF');
	// alert('Welcome PORJOTOK')
	this.setState({
		website:[

			{name:'PORJOTOK.shop',founder:'Araf'},
			{name:'A ecommencers platform',founder:'Ahmed'},
			]
	})
}

	render(){
		const style = {
			backgroundColor: 'blue',
			font: 'inherit',
			border:'2px solid maroon',
			padding: '10px',
			cousor: 'pointer',
		};
		return ( 
			<div>
				<button style={style} onClick={this.clickHandler}>Click Here</button>
			<h2 className='Card'> Please Visit {this.state.website[0].name} Founder {this.state.website[1].founder}</h2>
			<h2 className='Card'> Please Visit {this.state.website[1].name} Founder {this.state.website[0].founder}</h2>
			<h2 className='Card'> Please Visit {this.state.website[0].name} Founder {this.state.website[1].founder}</h2>
				</div>
			)
	}
 
}

export default Porjotok