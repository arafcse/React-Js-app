import React,{ useState } from 'react'

const Hook = props =>{
const [websiteState, setWebsiteState] = useState({
        website:[

            {name:'PORJOTOK.xyz',founder:'Araf'},
            {name:'shop.xyz',founder:'Ahmed'},
            ]


    });

    const clickHandler = () => {
        setWebsiteState({
            website:[
        
                {name:'PORJOTOK.shop',founder:'Araf'},
                {name:'A ecommencers platform',founder:'Ahmed'},
                ]
            })
        }
	 
		
		return ( 
			<div>
				<button onClick={clickHandler}>Click Here</button>
			<h2> Please Visit {websiteState.website[0].name} Founder {websiteState.website[1].founder}</h2>
			<h2> Please Visit {websiteState.website[1].name} Founder {websiteState.website[0].founder}</h2>
			<h2> Please Visit {websiteState.website[0].name} Founder {websiteState.website[1].founder}</h2>
				</div>
			
        )
    }

export default Hook


