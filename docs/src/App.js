import React from "react";

import {
	Footer,
	Blog,
	Possibility,
	Header,
	Whatbucket,
	// Demo,
} from "./containers";
//Features, in ^^
import { CTA, Navbar } from "./components";
//Brand, above in import
import "./App.css";

const App = () => {
	return (
		<div className='App'>
			<div className='gradient__bg'>
				<Navbar />
				<Header />
				{/* <Demo /> */}
			</div>
			{/* <Brand /> */}
			<Whatbucket />
			{/* <Features /> */}
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
};

export default App;
