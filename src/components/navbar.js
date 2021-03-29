import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
<div>
    <div>
<nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></nav>
		<aside id="colorlib-aside" role="complementary" className="border js-fullheight">
			<div className="text-center">
				<div className="author-img" style={{backgroundImage: 'url(images/srinviasanraja.jpeg)'}}></div>
				<h1 id="colorlib-logo"><a href="index.html">Srinivasan Raja</a></h1>
				<span className="position">Web Developer</span>
                <span className="position"><a href="emailto:srinivasan4321@gmail.com">srinivasan4321@gmail.com</a></span>
			</div>
			<nav id="colorlib-main-menu" role="navigation" className="navbar">
				<div id="navbar" className="collapse">
					<ul>
						<li className="active"><a href="#" data-nav-section="home">Home</a></li>
						<li><a href="#about" data-nav-section="about">About</a></li>
						<li><a href="#skills" data-nav-section="skills">Skills</a></li>
                        <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
						<li><a className="external" href="https://github.com/srinivasanweb/" target="_blank">Works</a></li>
						<li><a className="external" href="http://blog.srinivasanraja.tk" target="_blank">Blog</a></li>
                        <li><a className="external" href="http://srinivasanraja.tk/srinivasanraja.doc" target="_blank">Resume</a></li>
						<li><a href="#contact" data-nav-section="contact">Contact</a></li>
					</ul>
				</div>
			</nav>

			<div className="colorlib-footer">
				<p><small>&copy; Copyright &copy; 2021 All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></small></p>
				<ul>
					<li><a href="#"><i className="icon-facebook2"></i></a></li>
					<li><a href="#"><i className="icon-twitter2"></i></a></li>
					<li><a href="#"><i className="icon-instagram"></i></a></li>
					<li><a href="#"><i className="icon-linkedin2"></i></a></li>
				</ul>
			</div>

		</aside>
        </div>
        </div>
     ) 
    } 
}