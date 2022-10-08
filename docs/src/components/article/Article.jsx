import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text, link }) => (
	<div className='bucket__blog-container_article'>
		<div className='bucket__blog-container_article-image'>
			<img src={imgUrl} alt='blog_image' />
		</div>
		<div className='bucket__blog-container_article-content'>
			<div>
				<p>{date}</p>
				<h3>{text}</h3>
			</div>
			<p>
				<a href={link} target='_blank' rel='noreferrer'>
					Read Full Article
				</a>
			</p>
		</div>
	</div>
);

export default Article;
