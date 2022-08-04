import React from "react";

function Contacts() {
    return(
        <div id="contact">
		<h2>Contacts</h2>
		<hr/>
		<p>
			Do you want us to style your home? Fill our the form and fill us with details! We love meet new people!</p>
			<form>
				<label for="name">Name</label><br/>
				<input type="text" id="name" name=""/><br/>
				<label for="email">Email</label><br/>
				<input type="email" id="email" name=""/><br/>
				<label for="message">Message</label><br/>
				<input type="text" id="message" name=""/>
				<button>Send</button>
			</form>
	    </div>
    )
}
export default Contacts