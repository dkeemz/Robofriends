import React from 'react';
import './Card.css';
import 'tachyons';

const Card = () =>{
	return(
		<div className = "tc f1 grow ma2 pa2 Card bg-light-blue">
			<img src="https://www.robohash.org/dkeemz?200x200" alt="Profile"/>
			<h2>Name</h2>
			<p>E-mail</p>
		</div>
		);
	}
export default Card;