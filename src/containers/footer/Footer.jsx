import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
	return (
		<div className='bucket__footer section__padding'>
			<div className='bucket__footer-heading'>
				<h1 className='gradient__text'>Do you want to join?</h1>
			</div>
			<div className='bucket__footer-btn'>
				<p>Get Started</p>
			</div>

			<div className='bucket__footer-links'>
				<div className='bucket__footer-links-logo'>
					<img src={gpt3Logo} alt='logo' />
					<p></p>
				</div>
				<div className='bucket__footer-links-div'>
					<h4>Links</h4>
					<p>Social Media</p>
					<p>About Us</p>
					<p>Contact Us</p>
				</div>
				<div className='bucket__footer-links-div'>
					<h4>Company</h4>
					<p>Terms and Conditions</p>
					<p>Privacy Policy</p>
				</div>
				<div className='bucket__footer-copyright'>
					<p>2022 bucket. All rights reserved.</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
