import React from 'react'
import boss from '../images/boss.jpg'
import member from '../images/baboon3.2.jpg'
import membertwo from '../images/baboon2.jpg'
import memberthree from '../images/baboon1.jpg'

function Workers() {
return(
<div id="designers">
	<h2>Desginers</h2>
	<hr/> 
	<p>Best Baboon Team in the world
	</p>
	<p>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<p>Our Designers are thoughtfully chosen:</p>
	<div class="member">
		<img src={boss}/>
		<div class="description">
			<h3>Mike Vazovzki</h3>
			<p class="position">CEO</p>
			<p>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
		</div>
	</div>
	<div class="member">
		<img src={member}/>
		<div class="description">
			<h3>Vasya Pupkin</h3>
			<p class="position">Assistant Of CEO</p>
			<p>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
		</div>
	</div>
	<div class="member">
		<img src={membertwo}/>
		<div class="description">
			<h3>Petya Ivanov</h3>
			<p class="position">Main Desginer</p>
			<p>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
		</div>
	</div>
	<div class="member">
		<img src={memberthree}/>
		<div class="description">
			<h3>Alexander Pushkin</h3>
			<p class="position">Maneger</p>
			<p>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
		</div>
	</div>
</div>
)
}

export default Workers