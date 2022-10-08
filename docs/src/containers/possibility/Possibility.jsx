import React from "react";

import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
	return (
		<div className='bucket__possibility section__padding' id='possibility'>
			<div className='bucket__possibility-image'>
				<img src={possibilityImage} alt='possibility' />
			</div>
			<div className='bucket__possibility-content'>
				{/* <h4>join now</h4> */}
				<h1 className='gradient__text'>
					Take the power to understand the cutting edge of research.
				</h1>
				<p>Imagine the innovative possibilities.</p>
				{/* <h4>join now</h4> */}
			</div>
		</div>
	);
};

export default Possibility;
