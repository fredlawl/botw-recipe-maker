import React from "react";

const About = () => {
	return (
		<article>
			<header>
				<h1>About</h1>
			</header>
			<p>This project is an interactive version of <a href={"https://zelda.gamepedia.com/Food"} title={"Zelda Wiki"} target={"new"}>Zelda Wiki</a></p>
			<p>Planned feature list:</p>
			<ul>
				<li>Fully functional meal generation</li>
				<li>Save/Upload inventory (to come back to later)</li>
				<li>Fully functional search</li>
			</ul>
			<p>Project is located on <a href={"https://github.com/fredlawl/botw-recpie-maker"} title={"GitHub"} target={"new"}>GitHub</a></p>
		</article>
	);
}

export default About;
