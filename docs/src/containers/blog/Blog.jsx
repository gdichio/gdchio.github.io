import React, { useEffect, useState } from "react";
import Article from "../../components/article/Article";
// import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

export default function Blog() {
	const [blogs, setBlogs] = useState([]);

	const rss2json =
		"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40gianyrox";

	function fetchBlogs() {
		fetch(rss2json)
			.then((response) => response.json())
			.then((data) => {
				console.log({ data });
				setBlogs(data.items);
			});
	}

	useEffect(() => {
		fetchBlogs();
	}, [rss2json]);
	return (
		<div className='bucket__blog section__padding' id='blog'>
			<div className='bucket__blog-heading'>
				<h1 className='gradient__text'>
					Reading is difficult, <br /> We are blogging about it.
				</h1>
			</div>
			{blogs.map(function (item, index) {
				return (
					<Article
						imgUrl={item.thumbnail}
						date={item.pubDate}
						text={item.title}
						link={item.link}
					/>
				);
			})}
			{/* <div className='bucket__blog-container'>
				<div className='bucket__blog-container_groupA'>
					<Article
						imgUrl={blog01}
						date='April 29, 2021'
						text='Stop Reading Top to Bottom! This Is How To Read An Academic Paper.'
					/>
				</div>
				<div className='bucket__blog-container_groupB'>
					<Article
						imgUrl={blog02}
						date='May 5, 2021'
						text='Why the “Three-pass Method” For Reading Research Papers Does Not Work!'
					/>
					<Article imgUrl={blog03} date='' text='Coming soon...' />
					<Article imgUrl={blog04} date='' text='Coming soon...' />
					<Article imgUrl={blog05} date='' text='Coming soon...' />
				</div>
			</div> */}
		</div>
	);
}
