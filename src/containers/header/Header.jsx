import React from "react";
import "./header.css";
// import people from "../../assets/people.png";
import tool from "../../assets/tool.png";

const Header = () => {
	return (
		<div className='bucket__header section__padding' id='home'>
			<div className='bucket__header-content'>
				<h1 className='gradient__text'>
					Learn to read academic papers with Bucket.
				</h1>
				<p>Bucket gives you the tools to elevate your reading ability.</p>
				<div className='bucket__header-content__input'>
					<input type='email' placeholder='Your Email Address'></input>
					<button type='button'>Get Started</button>
				</div>
				{/*<div className='bucket__header-content__people'>
					<img src={people} alt='people' />  
					<p>1,600 people requested access in the last 24 hours.</p> 
				</div> */}
			</div>
			<div className='bucket__header-image'>
				<img src={tool} alt='tool' />
			</div>
		</div>
	);
};

export default Header;
