import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Digit from "./Digit";

//create your first component
const Home = ({seconds}) => {

	return (
		<div className="text-center container">
			<div className="row counter">
				<div className="col">
				<Digit value={<span className="fa fa-clock"></span>}/>
				</div>
				<div className="col">
				<Digit value ={Math.floor(seconds/100000)%10}/>
				</div>
				<div className="col">
				<Digit value ={Math.floor(seconds/10000)%10}/>
				</div>
				<div className="col">
				<Digit value ={Math.floor(seconds/1000)%10}/>
				</div>
				<div className="col">
				<Digit value ={Math.floor(seconds/100)%10}/>
				</div>
				<div className="col">
				<Digit value ={Math.floor(seconds/10)%10}/>
				</div>
				<div className="col">
				<Digit value ={Math.floor(seconds%10)}/>
				</div>

			</div>
			
		</div>
			
	);
};

export default Home;
