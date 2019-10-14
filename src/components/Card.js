import React from 'react';

const Card = ({ name, email, id})=>{
	{/*const { name, email, id} =props;*/}
	return (

		<div className='bg-light-green dib br3 ma2 grow pa3 bw2 shadow-5'>
			<img alt='Robots' src= {`https://robohash.org/${id}?200*200`}/>
			{/* <img alt='Robots' src= 'https://robohash.org/he?200*200'/>*/}
			<div>
			<h2>{name} </h2>
			<p> {email}</p>
			</div>
		</div>
);
}

export default Card;
