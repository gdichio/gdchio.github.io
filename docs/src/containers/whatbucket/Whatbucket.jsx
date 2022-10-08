import React from "react";
import { Feature } from "../../components";
import "./whatbucket.css";

const Whatbucket = () => {
	return (
		<div className='bucket__whatbucket section__margin' id='whbuck'>
			<div className='bucket__whatbucket-feature'>
				<Feature
					title='What is Bucket?'
					text='Bucket is a platform for you to elevate your academic reading ability. It defines, reorganizes, and analyzes papers that you need to read.'
				/>
			</div>
			<div className='bucket__whatbucket-heading'>
				<h1 className='gradient__text'>
					Elevate your academic reading ability.
				</h1>

				<p>
					<a href='#blog'>Explore the Library</a>
				</p>
			</div>
			<div className='bucket__whatbucket-container'>
				<Feature
					title='AI'
					text='Bucket uses AI to analyze research papers and output a more digestible piece of text so you can understand complex topics.'
				/>
				<Feature
					title='Database'
					text='Bucket has access to large databases of research that you have free access to.'
				/>
				<Feature
					title='Tools'
					text='Bucket offers a broad range of tools for you to use when reading academic papers.'
				/>
			</div>
		</div>
	);
};
/*styles not working for bar above titles*/
export default Whatbucket;
